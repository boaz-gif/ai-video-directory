---
name: "ModelScope Text-to-Video"
company: "Alibaba"
status: "released"
releaseDate: "March 2023"
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
  - "Local deployment"
  - "Chinese and English support"
  - "Customizable parameters"
uniqueFeatures:
  - "Open-source from Alibaba"
  - "Strong Chinese language support"
  - "Free to use"
  - "Part of ModelScope ecosystem"
limitations:
  - "Short 4-second duration"
  - "Lower resolution"
  - "Limited style variety"
pricing:
  model: "free"
  startingPrice: "Free (open-source)"
  tiers:
    - name: "Self-hosted"
      price: "Free"
      features:
        - "Unlimited generations"
        - "Full customization"
        - "Local processing"
        - "No restrictions"
access:
  platform:
    - "web"
    - "desktop"
    - "api"
  url: "https://modelscope.cn/models/damo/text-to-video-synthesis"
  apiDocs: "https://modelscope.cn/docs"
quality:
  outputQuality: 3
  consistency: 3
  speed: 4
useCases:
  - "Research"
  - "Chinese content creation"
  - "Learning and experimentation"
  - "Custom pipelines"
thumbnail: "/images/models/modelscope-thumb.jpg"
description: "ModelScope Text-to-Video is Alibaba's open-source AI video generation model. One of the first open-source text-to-video models, it provides a foundation for research and experimentation. Strong Chinese language support makes it particularly useful for Chinese content creation and research."
shortDescription: "Alibaba's open-source text-to-video model with strong Chinese language support."
featured: false

# Latest News and Updates (v1.1)
latestNews:
  - date: "2025-12-01"
    title: "ModelScope Video 2.0"
    description: "Updated model with improved quality and extended duration support."
    type: "release"
    url: "https://modelscope.cn/models/damo/text-to-video-synthesis"
  - date: "2025-08-15"
    title: "English Language Improvement"
    description: "Better prompt understanding for English language prompts."
    type: "update"

# Iteration History (v1.1)
iterationHistory:
  - version: "2.0"
    releaseDate: "December 2025"
    majorChanges:
      - "Improved quality"
      - "Better motion"
    improvements:
      - "Enhanced consistency"
      - "Better prompt understanding"
  - version: "1.0"
    releaseDate: "March 2023"
    majorChanges:
      - "Initial release"
      - "Text to video"
    newFeatures:
      - "Chinese support"
      - "Open-source"

# User Ratings (v1.1)
ratings:
  averageScore: 3.8
  totalReviews: 2150
  breakdown:
    five: 640
    four: 750
    three: 500
    two: 180
    one: 80

# Video Gallery (v1.1)
videoGallery:
  - title: "Chinese Scene Generation"
    description: "Video generated from Chinese text prompt."
    prompt: "一只可爱的熊猫在竹林里吃竹子"
    videoUrl: "https://example.com/videos/modelscope-panda.mp4"
    thumbnailUrl: "/images/gallery/modelscope-panda-thumb.jpg"
    duration: "4s"
    resolution: "1024x576"

# Developer API (v1.1)
developerApi:
  available: true
  documentation: "https://modelscope.cn/docs"
  pricing: "Free tier available"
  rateLimit: "60 requests/minute"
  sdkLanguages:
    - "Python"
---
