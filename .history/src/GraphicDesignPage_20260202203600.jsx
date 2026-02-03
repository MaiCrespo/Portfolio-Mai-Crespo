.scrollable-content {
    overflow-y: auto !important;
    justify-content: flex-start !important;
    padding-top: 60px !important;
    /* Glassmorphism - matching the nav bar */
    background: rgba(0, 0, 0, 0.7) !important;
    backdrop-filter: blur(10px) !important;
    border: 1px solid rgba(255, 255, 255, 0.1) !important;
    border-radius: 40px !important;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 10;
  }
  
  .project-page-title {
    font-family: "Hellishy", serif;
    font-size: 3.5rem;
    color: #fff;
    margin-bottom: 10px;
  }
  
  .title-separator {
    display: flex;
    align-items: center;
    width: 40%;
    margin-bottom: 40px;
    gap: 10px;
  }
  
  .title-separator hr {
    flex: 1;
    border: 0.5px solid rgba(255, 255, 255, 0.3);
  }
  
  .sep-dot {
    width: 4px;
    height: 4px;
    background: #fff;
    border-radius: 50%;
  }
  
  .projects-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
    width: 90%;
    padding-bottom: 60px;
  }
  
  .project-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  
  /* Centers the 2 items in the bottom row across 3 columns */
  .project-item.bottom-row {
    grid-column: span 1;
  }
  
  .project-item:nth-last-child(2) {
    grid-column-start: 1;
    margin-left: 50%;
  }
  .project-item:last-child {
    grid-column-start: 3;
    margin-left: -50%;
  }
  
  .project-name {
    font-family: "Hellishy", serif;
    color: #fff;
    font-size: 2rem;
    margin-bottom: 20px;
  }
  
  .project-card {
    width: 100%;
    background: transparent;
  }
  
  .project-card img {
    width: 100%;
    aspect-ratio: 4/5;
    object-fit: cover;
    border-radius: 30px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
    margin-bottom: 15px;
  }
  
  .project-info h3 {
    font-size: 1.4rem;
    color: #fff;
    margin-bottom: 10px;
  }
  
  .project-info p {
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.4;
    margin-bottom: 20px;
    min-height: 60px;
  }
  
  .view-more-btn {
    background: transparent;
    border: 1px solid rgba(255, 255, 255, 0.5);
    color: #fff;
    padding: 8px 24px;
    border-radius: 20px;
    font-size: 0.7rem;
    cursor: pointer;
    transition: 0.3s;
  }
  
  .view-more-btn:hover {
    background: #fff;
    color: #000;
  }
  
  /* Responsiveness */
  @media (max-width: 1024px) {
    .projects-grid {
      grid-template-columns: repeat(2, 1fr);
    }
    .project-item.bottom-row {
      grid-column: span 1;
      margin: 0;
    }
    .project-item:nth-last-child(2),
    .project-item:last-child {
      margin: 0;
      grid-column: auto;
    }
  }