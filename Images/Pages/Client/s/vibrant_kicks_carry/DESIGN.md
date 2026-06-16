---
name: Vibrant Kicks & Carry
colors:
  surface: '#f8f9fa'
  surface-dim: '#d9dadb'
  surface-bright: '#f8f9fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f5'
  surface-container: '#edeeef'
  surface-container-high: '#e7e8e9'
  surface-container-highest: '#e1e3e4'
  on-surface: '#191c1d'
  on-surface-variant: '#594046'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#f0f1f2'
  outline: '#8d7076'
  outline-variant: '#e1bec5'
  surface-tint: '#b90a5a'
  primary: '#b90a5a'
  on-primary: '#ffffff'
  primary-container: '#ff4d8d'
  on-primary-container: '#5b0028'
  inverse-primary: '#ffb1c4'
  secondary: '#4c5a9d'
  on-secondary: '#ffffff'
  secondary-container: '#a7b5ff'
  on-secondary-container: '#364486'
  tertiary: '#5e5e5e'
  on-tertiary: '#ffffff'
  tertiary-container: '#919191'
  on-tertiary-container: '#2a2a2a'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffd9e0'
  primary-fixed-dim: '#ffb1c4'
  on-primary-fixed: '#3f001a'
  on-primary-fixed-variant: '#8f0043'
  secondary-fixed: '#dde1ff'
  secondary-fixed-dim: '#b9c3ff'
  on-secondary-fixed: '#001257'
  on-secondary-fixed-variant: '#334283'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c6'
  on-tertiary-fixed: '#1b1b1b'
  on-tertiary-fixed-variant: '#474747'
  background: '#f8f9fa'
  on-background: '#191c1d'
  surface-variant: '#e1e3e4'
typography:
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '800'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '700'
    lineHeight: 24px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-bold:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '700'
    lineHeight: 16px
  price-display:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '800'
    lineHeight: 24px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-margin: 24px
  gutter: 16px
  card-padding: 16px
  section-gap: 32px
---

## Brand & Style

The brand personality is youthful, energetic, and highly visual, specifically designed to appeal to fashion-forward audiences interested in footwear and accessories. The design style blends **Modern Minimalism** with **Playful Tactility**, using expansive white space to let colorful products pop.

Emotional triggers include:
- **Optimism:** Through the use of pastel "bubble" containers and vibrant accents.
- **Clarity:** Through bold, high-contrast typography and intentional layout hierarchy.
- **Ease:** Through soft, rounded edges and approachable interactive elements.

The visual mood is established by combining high-contrast functional elements (black buttons) with soft, expressive backgrounds (pastel blues and pinks), creating a balanced shopping experience that feels both professional and fun.

## Colors

The palette is anchored by a stark white background to ensure maximum legibility and product focus. 

- **Primary Pink:** Used for high-energy accents, selection states, and heart icons to evoke desire.
- **Secondary Blue:** A soft, periwinkle-leaning blue used for product backdrops and secondary card backgrounds.
- **Tertiary Black:** Reserved for primary "Add to Cart" and "Check Out" actions to create an undeniable hierarchy and sense of urgency.
- **Pastels:** Muted green, pink, and blue serve as tonal "containers" behind products, creating a soft depth without competing with the product photography.

## Typography

This design system uses **Plus Jakarta Sans** across all levels to maintain a friendly yet modern aesthetic. 

- **Weight as Hierarchy:** The system relies heavily on "ExtraBold" (800) and "Bold" (700) for prices and titles to ensure they are the first thing a user sees.
- **Negative Letter Spacing:** Applied to larger headlines to create a tighter, more "editorial" feel common in premium e-commerce.
- **Contrast:** Functional labels (like size or color) use high-weight fonts, while descriptive body text uses a lighter weight with increased line height for readability.

## Layout & Spacing

The layout follows a **Fluid Grid** model optimized for mobile-first consumption. 

- **Safe Zones:** A consistent 24px margin is maintained on the left and right edges of the screen.
- **Vertical Rhythm:** Sections (e.g., "Category" to "For You") are separated by a 32px gap to prevent visual clutter.
- **Horizontal Scroll:** Used for category chips and "New Arrivals" to maximize vertical screen real estate.
- **Product Grids:** A 2-column layout is preferred for standard product lists, using a 16px gutter. Featured items span the full width or utilize larger card formats.

## Elevation & Depth

Visual hierarchy is achieved through a mix of **Tonal Layers** and **Soft Shadows**:

- **Surface Depth:** Product cards use a pure white background set against a slightly off-white (#F8F9FA) page background, or are defined by their soft pastel container colors.
- **Shadow Profile:** Shadows are extremely diffused. Use a large blur radius (20px-30px) with very low opacity (5-8%) and a slight Y-offset (4px-8px). Shadows should feel like ambient light rather than a direct light source.
- **Interaction Depth:** Active states for buttons and cards may slightly increase shadow spread to "lift" the element closer to the user.

## Shapes

The shape language is defined by oversized, generous radii that contribute to the "vibrant and friendly" brand narrative.

- **Primary Cards:** Use a 1.5rem (24px) radius to create a soft, approachable container.
- **Buttons & Inputs:** Use a 1rem (16px) radius, providing a distinct but slightly firmer feel than the product cards.
- **Selection Chips:** Utilize pill-shaped (fully rounded) geometry to differentiate them from square-ish product cards.
- **Icons:** Should feature rounded terminals and consistent stroke weights to match the typeface.

## Components

### Buttons
- **Primary Action:** Solid black background with white uppercase text. High-contrast, 16px border-radius, and centered.
- **Icon Buttons:** Small circular or soft-square containers with a light gray background and outline-style icons.

### Cards
- **Product Card:** Features a pastel-colored background for the image area, with white text or a white footer containing the name and price.
- **Category Card:** White elevated squares with centered icons and labels below.

### Inputs & Selectors
- **Quantity Selector:** A soft-gray, horizontally-oriented pill with "-" and "+" symbols flanking the numerical value.
- **Size Selector:** Rounded-square chips. The "Selected" state is solid black with white text; "Inactive" is light gray with black text.

### Navigation
- **Bottom Bar:** A clean, white floating or fixed bar. Icons are outline-style with a 2px stroke. The active state is indicated by a primary color shift or a small dot indicator below the icon.

### Feedback
- **Badges:** Small, high-contrast pills (e.g., "New" or "Sale") placed in the top corner of product images.