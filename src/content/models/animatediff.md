---
name: "AnimateDiff"
company: "Shanghai AI Lab"
status: "released"
releaseDate: "July 2023"
lastUpdated: "2026-02-15"
categories:
  - "text-to-video"
  - "image-to-video"
  - "animation"
capabilities:
  maxResolution: "1024x576"
  maxDuration: "4 seconds"
  aspectRatios:
    - "16:9"
    - "9:16"
    - "1:1"
  frameRate: "24 fps"
  audioGeneration: false
features:
  - "Text to video"
  - "Image animation"
  - "Motion module for SD models"
  - "Community model support"
  - "Style customization"
  - "Open-source"
uniqueFeatures:
  - "Works with any Stable Diffusion model"
  - "Open-source and free"
  - "Active community development"
  - "Extensible architecture"
limitations:
  - "Short 4-second duration"
  - "Lower resolution"
  - "Requires technical setup"
pricing:
  model: "free"
  startingPrice: "Free (open-source)"
  tiers:
    - name: "Self-hosted"
      price: "Free"
      features:
        - "Unlimited generations"
        - "Full customization"
        - "All community models"
        - "No restrictions"
access:
  platform:
    - "desktop"
    - "api"
  url: "https://github.com/guoyww/AnimateDiff"
  apiDocs: "https://github.com/guoyww/AnimateDiff"
quality:
  outputQuality: 4
  consistency: 3
  speed: 3
useCases:
  - "Animation creation"
  - "Research"
  - "Custom video pipelines"
  - "Style experimentation"
  - "Community projects"
thumbnail: "/images/models/animatediff-thumb.jpg"
description: "AnimateDiff is an open-source motion module that brings any Stable Diffusion model to life. Developed by Shanghai AI Lab, it enables animation generation from text or images using the vast ecosystem of Stable Diffusion checkpoints. Perfect for researchers, developers, and creators who want full control over their video generation pipeline."
shortDescription: "Open-source motion module for animating any Stable Diffusion model with community support."
featured: false

# Latest News and Updates (v1.1)
latestNews:
  - date: "2026-01-15"
    title: "AnimateDiff V3 Released"
    description: "Major update with improved motion quality and support for SDXL models."
    type: "release"
    url: "https://github.com/guoyww/AnimateDiff"
  - date: "2025-10-20"
    title: "SDXL Support Added"
    description: "AnimateDiff now supports Stable Diffusion XL models for higher quality output."
    type: "feature"
  - date: "2025-08-01"
    title: "Community Model Zoo Expansion"
    description: "Community has created over 1000 custom motion models using AnimateDiff."
    type: "announcement"

# Iteration History (v1.1)
iterationHistory:
  - version: "V3"
    releaseDate: "January 2026"
    majorChanges:
      - "SDXL support"
      - "Improved motion quality"
      - "Better temporal consistency"
    newFeatures:
      - "New motion modules"
      - "Extended duration options"
    improvements:
      - "Reduced flickering"
      - "Better frame coherence"
  - version: "V2"
    releaseDate: "October 2024"
    majorChanges:
      - "Community model support"
      - "Improved quality"
    newFeatures:
      - "Motion LoRA training"
      - "Custom motion modules"
  - version: "V1"
    releaseDate: "July 2023"
    majorChanges:
      - "Initial release"
      - "SD 1.5 support"
    newFeatures:
      - "Motion module"
      - "Image animation"

# User Ratings (v1.1)
ratings:
  averageScore: 4.1
  totalReviews: 3890
  breakdown:
    five: 1440
    four: 1400
    three: 700
    two: 230
    one: 120

# Video Gallery (v1.1)
videoGallery:
  - title: "Anime Style Animation"
    description: "Animation using anime-style Stable Diffusion checkpoint with AnimateDiff."
    prompt: "Anime girl with flowing hair, cherry blossoms falling, studio ghibli style"
    videoUrl: "https://example.com/videos/animatediff-anime.mp4"
    thumbnailUrl: "/images/gallery/animatediff-anime-thumb.jpg"
    duration: "4s"
    resolution: "1024x576"

# Developer API (v1.1)
developerApi:
  available: false
  documentation: "https://github.com/guoyww/AnimateDiff"
  pricing: "Free (self-hosted)"
  rateLimit: "N/A"
  sdkLanguages:
    - "Python"
---
