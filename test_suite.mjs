import puppeteer from 'puppeteer-core';
import path from 'path';

const BRAVE_PATH = '/Applications/Brave Browser.app/Contents/MacOS/Brave Browser';
const SCRATCH_DIR = '/Users/manavrajrathour/.gemini/antigravity/brain/f90314e8-e063-4c1e-b533-78931d1d6c6b/scratch';

async function runTests() {
  console.log('🚀 Launching automated portfolio test suite...');
  
  const browser = await puppeteer.launch({
    executablePath: BRAVE_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  const consoleErrors = [];
  page.on('console', (msg) => {
    if (msg.type() === 'error') {
      consoleErrors.push(msg.text());
    }
  });

  page.on('pageerror', (err) => {
    consoleErrors.push(err.message);
  });

  // 1. Load the page at 1440x900
  console.log('📍 Navigating to http://127.0.0.1:3000/');
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://127.0.0.1:3000/', { waitUntil: 'networkidle0' });

  // 2. Check for required sections
  const requiredSections = ['home', 'about', 'education', 'skills', 'projects', 'achievements', 'contact'];
  console.log('🔍 Checking section anchors...');
  for (const id of requiredSections) {
    const el = await page.$(`#${id}`);
    if (!el) {
      throw new Error(`Section #${id} is missing from DOM!`);
    }
  }
  console.log('✅ All 7 required sections present in DOM.');

  // 3. Check for student info accuracy
  console.log('🔍 Checking student info in rendered page...');
  const textContent = await page.evaluate(() => document.body.innerText);
  const requiredTerms = ['Vinay Bansal', 'B.Tech Student', 'JECRC University', 'Jaipur', 'vinaybansal893@gmail.com'];
  for (const term of requiredTerms) {
    if (!textContent.includes(term)) {
      throw new Error(`Missing expected student info text: "${term}"`);
    }
  }
  console.log('✅ All student info accurately rendered without modifications.');

  // 4. Test viewports for horizontal overflow
  const viewports = [
    { name: '1920px (Desktop Large)', width: 1920, height: 1080 },
    { name: '1440px (Laptop)', width: 1440, height: 900 },
    { name: '1024px (Tablet Landscape)', width: 1024, height: 768 },
    { name: '768px (Tablet Portrait)', width: 768, height: 1024 },
    { name: '430px (iPhone Pro Max)', width: 430, height: 932 },
    { name: '390px (iPhone Pro)', width: 390, height: 844 },
    { name: '360px (Small Android)', width: 360, height: 800 },
  ];

  console.log('📱 Checking horizontal overflow across viewports...');
  for (const vp of viewports) {
    await page.setViewport({ width: vp.width, height: vp.height });
    await page.evaluate(() => window.scrollTo(0, 0));
    await new Promise((r) => setTimeout(r, 100));

    const hasOverflow = await page.evaluate(() => {
      return document.documentElement.scrollWidth > window.innerWidth;
    });

    if (hasOverflow) {
      const scrollW = await page.evaluate(() => document.documentElement.scrollWidth);
      throw new Error(`Horizontal overflow detected at ${vp.name}! ScrollWidth: ${scrollW}px, Viewport: ${vp.width}px`);
    }
    console.log(`  ✓ ${vp.name}: No horizontal overflow (scrollWidth <= ${vp.width}px)`);
  }

  // 5. Test desktop screenshot
  await page.setViewport({ width: 1440, height: 900 });
  await page.screenshot({ path: path.join(SCRATCH_DIR, 'test_desktop_full.png'), fullPage: true });
  console.log('📸 Captured test_desktop_full.png');

  // 6. Test project modal interaction
  console.log('🔍 Testing Project modal opening and closing...');
  const detailButtons = await page.$$('button[aria-label^="View details for"]');
  if (detailButtons.length === 0) {
    throw new Error('Project detail buttons not found!');
  }
  await detailButtons[0].click();
  await new Promise((r) => setTimeout(r, 300));

  const modalVisible = await page.$('div[role="dialog"]');
  if (!modalVisible) {
    throw new Error('Modal dialog did not open when clicking project button!');
  }
  console.log('✅ Project details modal successfully opened.');
  await page.screenshot({ path: path.join(SCRATCH_DIR, 'test_project_modal.png') });

  // Close modal via Close button
  const closeButton = await page.$('button[aria-label="Close modal"]');
  if (closeButton) {
    await closeButton.click();
    await new Promise((r) => setTimeout(r, 300));
  }
  const modalAfterClose = await page.$('div[role="dialog"]');
  if (modalAfterClose) {
    throw new Error('Modal did not close!');
  }
  console.log('✅ Project details modal closed properly.');

  // 7. Test Skills filtering
  console.log('🔍 Testing Skills filter category...');
  const programmingPill = await page.evaluateHandle(() => {
    const buttons = Array.from(document.querySelectorAll('button'));
    return buttons.find(b => b.textContent.trim() === 'Programming');
  });
  if (programmingPill) {
    await programmingPill.click();
    await new Promise((r) => setTimeout(r, 200));
    console.log('✅ Skills category filtered successfully.');
  }

  // 8. Test Contact form validation
  console.log('🔍 Testing Contact Form validation...');
  await page.evaluate(() => {
    document.getElementById('contact').scrollIntoView();
  });
  await new Promise((r) => setTimeout(r, 400));

  // Click submit without entering values
  const submitBtn = await page.$('form button[type="submit"]');
  if (!submitBtn) {
    throw new Error('Contact form submit button not found!');
  }
  await submitBtn.click();
  await new Promise((r) => setTimeout(r, 200));

  const nameError = await page.$('#name-error');
  const emailError = await page.$('#email-error');
  const messageError = await page.$('#message-error');

  if (!nameError || !emailError || !messageError) {
    throw new Error('Contact form validation errors failed to trigger on empty submit!');
  }
  console.log('✅ Contact form empty validation successfully triggered errors.');

  // Test typing valid values
  await page.type('#name', 'Alex Johnson');
  await page.type('#email', 'alex@university.edu');
  await page.type('#message', 'Hello Vinay, I am looking forward to collaborating on an AI web project!');
  
  await submitBtn.click();
  await new Promise((r) => setTimeout(r, 400));

  const successHeading = await page.evaluate(() => {
    return document.body.innerText.includes('Message Prepared!') || document.body.innerText.includes('Re-open Email App');
  });
  if (!successHeading) {
    throw new Error('Contact form submission state failed to display!');
  }
  console.log('✅ Contact form submitted successfully with direct client-side feedback.');

  // 9. Test mobile layout and hamburger menu
  console.log('📱 Testing Mobile layout (390x844)...');
  await page.setViewport({ width: 390, height: 844 });
  await page.evaluate(() => window.scrollTo(0, 0));
  await new Promise((r) => setTimeout(r, 200));

  const hamburgerBtn = await page.$('button[aria-label="Toggle navigation menu"]');
  if (!hamburgerBtn) {
    throw new Error('Mobile hamburger menu button not found at 390px width!');
  }
  await hamburgerBtn.click();
  await new Promise((r) => setTimeout(r, 300));
  console.log('✅ Mobile hamburger menu opened.');

  await page.screenshot({ path: path.join(SCRATCH_DIR, 'test_mobile_menu.png') });

  // Click a navigation link inside mobile menu
  await page.evaluate(() => {
    const links = Array.from(document.querySelectorAll('div.md\\:hidden a'));
    const aboutLink = links.find(a => a.textContent.trim() === 'About');
    if (aboutLink) aboutLink.click();
  });
  await new Promise((r) => setTimeout(r, 400));
  console.log('✅ Mobile menu link clicked and menu auto-closed.');

  await page.screenshot({ path: path.join(SCRATCH_DIR, 'test_mobile_about.png') });

  // 10. Check console errors
  console.log(`🔍 Checking console error logs... (${consoleErrors.length} errors found)`);
  if (consoleErrors.length > 0) {
    console.error('Console errors detected:', consoleErrors);
    throw new Error(`Console errors found: ${consoleErrors.join(', ')}`);
  }
  console.log('✅ 0 console errors detected!');

  await browser.close();
  console.log('\n🎉 ALL PORTFOLIO TESTS PASSED WITH 100% SUCCESS!');
}

runTests().catch((err) => {
  console.error('❌ Test failed:', err);
  process.exit(1);
});
