// Script to update all HTML files with horizontal navigation bar, email contact, and JavaScript file
const fs = require('fs');
const path = require('path');

// Get all HTML files in the current directory
const htmlFiles = fs.readdirSync('.').filter(file => file.endsWith('.html'));

// Process each HTML file
htmlFiles.forEach(file => {
    // Skip already updated files
    if (file === 'index.html' || file === 'contact.html' || file === 'about.html') {
        console.log(`Skipping already updated file: ${file}`);
        return;
    }

    console.log(`Processing file: ${file}`);
    let content = fs.readFileSync(file, 'utf8');

    // Add horizontal navigation bar if not already present
    if (!content.includes('horizontal-nav-toggle')) {
        content = content.replace(
            /(<body>[\s\S]*?)(<header>)/,
            '$1<!-- Horizontal Navigation -->\n' +
            '  <div class="horizontal-nav-toggle">\n' +
            '    <i class="fas fa-bars"></i>\n' +
            '  </div>\n' +
            '  <nav class="horizontal-nav">\n' +
            '    <div class="horizontal-nav-header">\n' +
            '      <img src="https://ievents.ie/wp-content/uploads/2022/07/psd_logo-1024x800.png" alt="Logo" class="horizontal-nav-logo">\n' +
            '    </div>\n' +
            '    <ul class="horizontal-nav-menu">\n' +
            '      <li><a href="index.html">Home</a></li>\n' +
            '      <li><a href="about.html">About</a></li>\n' +
            '      <li><a href="contact.html">Contact</a></li>\n' +
            '      <li><a href="staff.html">Staff</a></li>\n' +
            '      <li><a href="merchandise.html">Merchandise</a></li>\n' +
            '      <li><a href="sitemap.html">Sitemap</a></li>\n' +
            '    </ul>\n' +
            '  </nav>\n\n' +
            '  $2'
        );
    }

    // Update footer contact section with email links
    if (!content.includes('mailto:B00177545@mytudublin.ie')) {
        content = content.replace(
            /<h3>Contact<\/h3>[\s\S]*?<p>Email: info@ievents\.ie<\/p>/,
            '<h3>Contact</h3>\n' +
            '          <p>123 Main Street</p>\n' +
            '          <p>Dublin, Ireland</p>\n' +
            '          <p>Phone: +353 8323293</p>\n' +
            '          <p>Email: <a href="mailto:info@ievents.ie">info@ievents.ie</a></p>\n' +
            '          <p>Student Contact: <a href="mailto:B00177545@mytudublin.ie">B00177545@mytudublin.ie</a></p>'
        );
    }

    // Add JavaScript file if not already present
    if (!content.includes('script src="js/script.js"')) {
        content = content.replace(
            /<\/footer>\s*<\/body>\s*<\/html>/,
            '</footer>\n\n' +
