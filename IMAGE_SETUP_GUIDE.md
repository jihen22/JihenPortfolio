# Image Setup Guide for Jihen's Portfolio

## 📁 Directory Structure

Create the following directory structure in `public/images/`:

```
public/
├── images/
│   ├── avatar.png                    (200x200px)
│   ├── portrait.png                  (400x400px)
│   ├── projects/
│   │   ├── ailine-pro.png           (1200x600px)
│   │   ├── devops-pipeline.png      (1200x600px)
│   │   ├── crud-generator.png       (1200x600px)
│   │   └── employee-manager.png     (1200x600px)
│   ├── companies/
│   │   ├── ailine-logo.png
│   │   ├── enterprise-esolutions-logo.png
│   │   ├── cpg-logo.png
│   │   └── microsoft-tech-club-logo.png
│   └── education/
│       ├── isimm-logo.png
│       └── uah-logo.png
```

---

## 🖼️ Image Specifications

### Profile Images

#### Avatar (200x200px)
- **Purpose**: Homepage header, navigation, profile cards
- **Format**: PNG with transparency or JPG
- **Recommended**: Professional headshot or avatar
- **File Size**: < 100KB
- **Location**: `public/images/avatar.png`

#### Portrait (400x400px)
- **Purpose**: About page hero section
- **Format**: PNG or JPG
- **Recommended**: High-quality professional photo
- **File Size**: < 300KB
- **Location**: `public/images/portrait.png`

---

### Project Screenshots (1200x600px)

#### AiLine Pro
- **Description**: AI-Powered Culture Platform
- **Recommended Content**: Dashboard, real-time analytics, NLP interface
- **Format**: PNG or JPG
- **File Size**: < 500KB
- **Location**: `public/images/projects/ailine-pro.png`

#### DevOps Pipeline
- **Description**: CI/CD Pipeline visualization
- **Recommended Content**: Jenkins dashboard, pipeline stages, build metrics
- **Format**: PNG or JPG
- **File Size**: < 500KB
- **Location**: `public/images/projects/devops-pipeline.png`

#### CRUD Generator
- **Description**: Code generation interface
- **Recommended Content**: Generator UI, generated code sample, admin interface
- **Format**: PNG or JPG
- **File Size**: < 500KB
- **Location**: `public/images/projects/crud-generator.png`

#### Employee Manager
- **Description**: Full-stack application interface
- **Recommended Content**: Employee list, dashboard, forms
- **Format**: PNG or JPG
- **File Size**: < 500KB
- **Location**: `public/images/projects/employee-manager.png`

---

### Company Logos (200x200px)

#### AiLine Logo
- **Format**: PNG with transparency (preferred)
- **File Size**: < 100KB
- **Location**: `public/images/companies/ailine-logo.png`

#### Enterprise eSolutions Logo
- **Format**: PNG with transparency
- **File Size**: < 100KB
- **Location**: `public/images/companies/enterprise-esolutions-logo.png`

#### CPG (Compagnie des Phosphates de Gafsa) Logo
- **Format**: PNG with transparency
- **File Size**: < 100KB
- **Location**: `public/images/companies/cpg-logo.png`

#### Microsoft Tech Club Logo
- **Format**: PNG with transparency
- **File Size**: < 100KB
- **Location**: `public/images/companies/microsoft-tech-club-logo.png`

---

### Education Logos (200x200px)

#### ISIMM Logo
- **Format**: PNG with transparency
- **File Size**: < 100KB
- **Location**: `public/images/education/isimm-logo.png`

#### Universidad de Alcalá (UAH) Logo
- **Format**: PNG with transparency
- **File Size**: < 100KB
- **Location**: `public/images/education/uah-logo.png`

---

## 🛠️ How to Add Images

### Step 1: Create Directories
```bash
mkdir -p public/images/projects
mkdir -p public/images/companies
mkdir -p public/images/education
```

### Step 2: Add Images
Copy your images to the appropriate directories:
- Profile images → `public/images/`
- Project screenshots → `public/images/projects/`
- Company logos → `public/images/companies/`
- Education logos → `public/images/education/`

### Step 3: Update Configuration (if needed)
Some images may need to be referenced in config files:

**For project images**, update `src/config/projects.ts`:
```typescript
{
  name: 'AiLine Pro',
  image: '/images/projects/ailine-pro.png',
  // ... other properties
}
```

**For company logos**, update `src/config/career.ts`:
```typescript
{
  company: 'AiLine',
  logo: '/images/companies/ailine-logo.png',
  // ... other properties
}
```

---

## 📸 Image Optimization Tips

### Before Uploading
1. **Resize to exact dimensions** - Use tools like:
   - Photoshop
   - GIMP (free)
   - Online tools: TinyPNG, Squoosh, Canva

2. **Compress for web** - Reduce file size:
   - TinyPNG: https://tinypng.com
   - ImageOptim: https://imageoptim.com
   - Squoosh: https://squoosh.app

3. **Use appropriate format**:
   - PNG: For logos and images with transparency
   - JPG: For photographs and complex images
   - WebP: For modern browsers (better compression)

4. **Add alt text** - For accessibility:
   ```html
   <img src="/images/avatar.png" alt="Jihen Messaoud - Full-Stack Developer" />
   ```

---

## 🎨 Design Recommendations

### Avatar
- Professional headshot
- Clear face visible
- Good lighting
- Neutral background
- Consistent with LinkedIn profile

### Portrait
- High-quality photo
- Professional attire
- Good lighting
- Friendly expression
- 400x400px square format

### Project Screenshots
- Clean, uncluttered interface
- Highlight key features
- Include UI elements
- Use consistent styling
- Add subtle branding

### Logos
- High contrast
- Clear and recognizable
- Transparent background (PNG)
- Consistent sizing
- Professional quality

---

## 🔍 Testing Images

After adding images, test:

1. **Image Loading**
   - Visit http://localhost:3000
   - Check all images load correctly
   - Verify no broken image icons

2. **Responsive Design**
   - Test on mobile (320px width)
   - Test on tablet (768px width)
   - Test on desktop (1920px width)

3. **Performance**
   - Check page load time
   - Use Chrome DevTools
   - Verify images are optimized

4. **Accessibility**
   - Verify alt text is present
   - Test with screen readers
   - Check color contrast

---

## 📱 Mobile Optimization

For mobile devices:
- Use responsive images
- Optimize file sizes
- Test on actual devices
- Verify touch targets
- Check loading performance

---

## 🚀 Deployment Considerations

Before deploying:
1. Verify all images are in `public/images/`
2. Test all image paths are correct
3. Optimize all images for web
4. Check image loading on slow connections
5. Verify images work on production domain

---

## 🎯 Priority Order

1. **High Priority** (Add first):
   - Avatar (200x200px)
   - Portrait (400x400px)

2. **Medium Priority** (Add next):
   - Project screenshots (4 images)
   - Company logos (4 images)

3. **Low Priority** (Add later):
   - Education logos (2 images)
   - Additional project images

---

## 💡 Tools Recommended

- **Image Editing**: Photoshop, GIMP, Canva
- **Compression**: TinyPNG, ImageOptim, Squoosh
- **Resizing**: Photoshop, GIMP, Online tools
- **Optimization**: ImageOptim, Squoosh, WebP converters

---

**Next Step**: Add your images to the `public/images/` directory following this guide, then refresh your browser to see them on your portfolio!

