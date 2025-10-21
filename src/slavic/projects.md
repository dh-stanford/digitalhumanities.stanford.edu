---
title: Slavic Projects
layout: templates/page.liquid
permalink: /slavic/projects/
---

# Slavic DH Projects

<div class="row mt-4">
  <!-- Project 1 -->
  <div class="col-md-6 mb-4">
    <a href="/slavic/projects/ukrainian-medicinal-herbs/" class="text-decoration-none">
      <div class="card shadow-sm card-hover project-card" style="background-image: url('/slavic/post-images/herbs.jpg');">
        <div class="card-overlay">
          <div class="card-content">
            <h3 class="card-title h3 font-weight-bold text-white mb-2">Digital Archive of Ukrainian Medicinal Herbs</h3>
            <p class="text-white-50 mb-3"><small><strong>Elizabeth Crim</strong></small></p>
            <span class="btn btn-outline-light">Learn More →</span>
          </div>
        </div>
      </div>
    </a>
  </div>

  <!-- Project 2 -->
  <div class="col-md-6 mb-4">
    <a href="/slavic/projects/war-poetry-archive/" class="text-decoration-none">
      <div class="card shadow-sm card-hover project-card" style="background-image: url('/slavic/post-images/poetry.jpg');">
        <div class="card-overlay">
          <div class="card-content">
            <h3 class="card-title h3 font-weight-bold text-white mb-2">Ukrainian War Poetry Video Archive</h3>
            <p class="text-white-50 mb-3"><small><strong>Alyssa Virker</strong></small></p>
            <span class="btn btn-outline-light">Learn More →</span>
          </div>
        </div>
      </div>
    </a>
  </div>

  <!-- Project 3 -->
  <div class="col-md-6 mb-4">
    <a href="/slavic/projects/yeva-biss/" class="text-decoration-none">
      <div class="card shadow-sm card-hover project-card" style="background-image: url('/slavic/post-images/biss.jpg');">
        <div class="card-overlay">
          <div class="card-content">
            <h3 class="card-title h3 font-weight-bold text-white mb-2">Heteroglossic Literature: Yeva Biss Digital Analysis</h3>
            <p class="text-white-50 mb-3"><small><strong>Ali Karakaya</strong></small></p>
            <span class="btn btn-outline-light">Learn More →</span>
          </div>
        </div>
      </div>
    </a>
  </div>

  <!-- Project 4 -->
  <div class="col-md-6 mb-4">
    <a href="/slavic/projects/gogol-color/" class="text-decoration-none">
      <div class="card shadow-sm card-hover project-card" style="background-image: url('/slavic/post-images/gogol.jpg');">
        <div class="card-overlay">
          <div class="card-content">
            <h3 class="card-title h3 font-weight-bold text-white mb-2">Color and Imperial Memory in Gogol's Ukraine</h3>
            <p class="text-white-50 mb-3"><small><strong>Eric Kim</strong></small></p>
            <span class="btn btn-outline-light">Learn More →</span>
          </div>
        </div>
      </div>
    </a>
  </div>
</div>

<style>
.project-card {
  height: 400px;
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;
  border-radius: 15px !important;
  border: none;
}

.card-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, 
    rgba(0,0,0,0) 0%, 
    rgba(0,0,0,0) 40%, 
    rgba(0,0,0,0.6) 50%,
    rgba(0,0,0,0.85) 100%);
  transition: background 0.3s ease;
  padding: 2rem 2rem 3.5rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.project-card:hover .card-overlay {
  background: linear-gradient(to bottom, 
    rgba(0,0,0,0) 0%, 
    rgba(0,0,0,0) 40%,
    rgba(0,0,0,0.7) 50%,
    rgba(0,0,0,0.95) 100%);
}

.card-content {
  max-height: 50%;
}

.btn-outline-light {
  transition: all 0.3s ease;
}

.project-card:hover .btn-outline-light {
  background-color: white;
  color: #212529;
}

.card-hover {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.card-hover:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.4) !important;
}
</style>