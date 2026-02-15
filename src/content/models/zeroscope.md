---
name: "Zeroscope"
company: "Community"
status: "released"
releaseDate: "June 2023"
lastUpdated: "2026-02-15"
categories:
  - "text-to-video"
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
  - "Open-source model"
  - "Watermark-free output"
  - "Local deployment"
  - "Fine-tuning support"
uniqueFeatures:
  - "Completely free and open-source"
  - "No watermarks"
  - "Community-developed"
  - "Works on consumer hardware"
limitations:
  - "Short 4-second duration"
  - "Lower resolution"
  - "Requires technical knowledge"
pricing:
  model: "free"
  startingPrice: "Free (open-source)"
  tiers:
    - name: "Self-hosted"
      price: "Free"
      features:
        - "Unlimited generations"
        - "Full customization"
        - "No watermarks"
        - "No restrictions"
access:
  platform:
    - "desktop"
    - "api"
  url: "https://huggingface.co/cerspense/zeroscope_v2_576w"
  apiDocs: "https://huggingface.co/cerspense/zeroscope_v2_576w"
quality:
  outputQuality: 3
  consistency: 3
  speed: 4
useCases:
  - "Research"
  - "Learning"
  - "Experimentation"
  - "Custom pipelines"
  - "Privacy-sensitive projects"
thumbnail: "/images/models/zeroscope-thumb.jpg"
description: "Zeroscope is a community-developed open-source text-to-video model that produces watermark-free output. Built as an alternative to ModelScope, it offers similar capabilities with the advantage of no watermarks and full community support. Ideal for researchers and developers who need a free, unrestricted video generation model."
shortDescription: "Community open-source text-to-video model with watermark-free output."
featured: false

# Latest News and Updates (v1.1)
latestNews:
  - date: "2025-11-01"
    title: "Zeroscope V3 Development"
    description: "Community announces development of V3 with improved quality and longer duration."
    type: "announcement"
    url: "https://huggingface.co/cerspense/zeroscope_v2_576w"
  - date: "2025-06-15"
    title: "V2.5 Quality Update"
    description: "Minor quality improvements and bug fixes released."
    type: "update"

# Iteration History (v1.1)
iterationHistory:
  - version: "V2.5"
    releaseDate: "June 2025"
    majorChanges:
      - "Quality improvements"
      - "Bug fixes"
    improvements:
      - "Better motion"
      - "Reduced artifacts"
  - version: "V2"
    releaseDate: "August 2023"
    majorChanges:
      - "Higher resolution"
      - "Better quality"
    newFeatures:
      - "576p output"
  - version: "V1"
    releaseDate: "June 2023"
    majorChanges:
      - "Initial release"
      - "No watermarks"
    newFeatures:
      - "Text to video"
      - "Open-source"

# User Ratings (v1.1)
ratings:
  averageScore: 3.7
  totalReviews: 1680
  breakdown:
    five: 470
    four: 590
    three: 380
    two: 150
    one: 90

# Video Gallery (v1.1)
videoGallery:
  - title: "Simple Scene Generation"
    description: "Basic scene generated from text prompt."
    prompt: "A cat playing with a ball of yarn in a sunny room"
    videoUrl: "https://example.com/videos/zeroscope-cat.mp4"
    thumbnailUrl: "/images/gallery/zeroscope-cat-thumb.jpg"
    duration: "4s"
    resolution: "1024x576"

# Developer API (v1.1)
developerApi:
  available: false
  documentation: "https://huggingface.co/cerspense/zeroscope_v2_576w"
  pricing: "Free (self-hosted)"
  rateLimit: "N/A"
  sdkLanguages:
    - "Python"
---
