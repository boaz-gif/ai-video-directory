---
name: "Stable Video Diffusion 1.2"
company: "Stability AI"
status: "released"
releaseDate: "November 2023"
lastUpdated: "2026-02-15"
categories:
  - "text-to-video"
  - "image-to-video"
capabilities:
  maxResolution: "1536x864"
  maxDuration: "8 seconds"
  aspectRatios:
    - "16:9"
    - "9:16"
    - "1:1"
    - "4:3"
  frameRate: "24 fps"
  audioGeneration: false
features:
  - "Text-to-video generation"
  - "Image-to-video animation"
  - "Open-source model"
  - "Local deployment"
  - "Customizable parameters"
  - "Fine-tuning support"
  - "Community models"
  - "Optimized inference"
uniqueFeatures:
  - "Fully open-source (Stability AI license)"
  - "Can run locally on consumer hardware"
  - "Customizable and extendable"
  - "No usage limits when self-hosted"
  - "Active community development"
  - "Fine-tuning capabilities"
limitations:
  - "Short 8-second maximum duration"
  - "Lower resolution than commercial alternatives"
  - "Requires technical knowledge for local setup"
  - "No native audio generation"
pricing:
  model: "free"
  startingPrice: "Free (self-hosted)"
  tiers:
    - name: "Self-hosted"
      price: "Free"
      features:
        - "Unlimited generations"
        - "Full customization"
        - "Local processing"
        - "No restrictions"
        - "Privacy-preserving"
    - name: "Stability AI Platform"
      price: "$10/month"
      features:
        - "Cloud generation"
        - "Priority access"
        - "API access"
        - "No hardware required"
access:
  platform:
    - "web"
    - "api"
    - "desktop"
  url: "https://stability.ai"
  apiDocs: "https://platform.stability.ai/docs"
quality:
  outputQuality: 4
  consistency: 3
  speed: 4
useCases:
  - "Research and development"
  - "Custom video pipelines"
  - "Learning and experimentation"
  - "Integration into applications"
  - "Privacy-sensitive projects"
  - "Fine-tuning for specific styles"
thumbnail: "/images/models/svd-thumb.jpg"
description: "Stable Video Diffusion 1.2 by Stability AI is the leading open-source AI video generation model. The February 2026 update brings 8-second video support, optimized inference for consumer GPUs, and an expanded community model zoo. It can be run locally or via API, offering unlimited generations and full customization for developers and researchers who want control over their video generation pipeline."
shortDescription: "Open-source AI video generation model with 8-second support, local deployment, and full customization for developers."
featured: true

# Latest News and Updates (v1.1)
latestNews:
  - date: "2026-02-03"
    title: "SVD 1.2 Released with 8-Second Support"
    description: "Major update extends video duration to 8 seconds and improves output quality with optimized inference."
    type: "release"
    url: "https://stability.ai/blog/svd-1-2"
  - date: "2026-01-08"
    title: "New Fine-Tuning Toolkit"
    description: "Comprehensive fine-tuning toolkit released, enabling custom model training on specific styles and subjects."
    type: "feature"
  - date: "2025-12-05"
    title: "Optimized Model for Consumer GPUs"
    description: "New optimized variant runs on 8GB VRAM, making local deployment accessible to more users."
    type: "update"
  - date: "2025-10-15"
    title: "Community Model Zoo Launched"
    description: "Official community model zoo launched with 500+ fine-tuned variants for specific use cases."
    type: "announcement"
    url: "https://stability.ai/community-zoo"
  - date: "2025-08-20"
    title: "SVD XT Extended Version"
    description: "Extended version with improved motion quality and better temporal consistency released."
    type: "release"

# Iteration History (v1.1)
iterationHistory:
  - version: "1.2"
    releaseDate: "February 2026"
    majorChanges:
      - "8-second video duration"
      - "Improved output quality"
      - "Consumer GPU optimization"
    newFeatures:
      - "Fine-tuning toolkit"
      - "Community model zoo"
      - "Optimized inference"
    improvements:
      - "Better motion consistency"
      - "Reduced VRAM usage (8GB)"
      - "Faster generation"
  - version: "1.1"
    releaseDate: "September 2025"
    majorChanges:
      - "Extended to 6 seconds"
      - "Better motion quality"
    newFeatures:
      - "Frame interpolation"
      - "Custom frame rates"
    improvements:
      - "Reduced flickering"
      - "Better temporal coherence"
  - version: "XT"
    releaseDate: "August 2025"
    majorChanges:
      - "Extended training"
      - "Improved quality"
    newFeatures:
      - "Higher resolution support"
      - "Better motion"
    improvements:
      - "More realistic motion"
      - "Better consistency"
  - version: "1.0"
    releaseDate: "November 2023"
    majorChanges:
      - "Initial open-source release"
      - "4-second videos"
      - "1024x576 resolution"
    newFeatures:
      - "Image-to-video"
      - "Text-to-video (via SDXL)"
      - "Local deployment"

# User Ratings (v1.1)
ratings:
  averageScore: 4.2
  totalReviews: 6540
  breakdown:
    five: 2620
    four: 2180
    three: 1090
    two: 390
    one: 260

# Video Gallery (v1.1)
videoGallery:
  - title: "Artistic Animation"
    description: "Artistic style animation demonstrating fine-tuned community model capabilities."
    prompt: "Painting coming to life, brush strokes animating, artistic style transfer"
    videoUrl: "https://example.com/videos/svd-artistic.mp4"
    thumbnailUrl: "/images/gallery/svd-artistic-thumb.jpg"
    duration: "6s"
    resolution: "1536x864"
  - title: "Nature Scene"
    description: "Natural landscape animation showcasing motion consistency."
    prompt: "Peaceful forest scene with gentle wind moving leaves and grass"
    videoUrl: "https://example.com/videos/svd-nature.mp4"
    thumbnailUrl: "/images/gallery/svd-nature-thumb.jpg"
    duration: "8s"
    resolution: "1536x864"

# Developer API (v1.1)
developerApi:
  available: true
  documentation: "https://platform.stability.ai/docs"
  pricing: "Credit-based, starting at $0.015/second"
  rateLimit: "150 requests/minute"
  sdkLanguages:
    - "Python"
    - "JavaScript"
    - "Go"
    - "Rust"
---
