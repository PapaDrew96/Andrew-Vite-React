import React from "react";
import './PapadrewToolsPage.css'; // Use the same CSS file for consistent styling

function PapadrewToolsPage() {
  return (
    <div className="papadrew-tools-page">
      <h1 className="text-custom-primary mb-4 text-center">Papadrew's Virtual Tools</h1>
      <p id="Pdesc">Welcome to Papadrew's Tools, your one-stop-shop for innovative digital solutions designed to enhance your productivity and creativity. Our suite of virtual tools is crafted with the latest technology to address various needs, from time management to creative expression. Explore our featured tools:</p>
      
      <section className="section-custom">
        <h2 className="text-custom-info">Time Travel Scheduler</h2>
        <p className="text-custom-secondary">Our Time Travel Scheduler goes beyond traditional calendar applications, allowing you to not only schedule appointments but also set reminders for your future self. It integrates seamlessly with virtual reality to provide an immersive experience of your scheduled events.</p>
      </section>
      
      <section className="section-custom">
        <h2 className="text-custom-success">Memory Vault</h2>
        <p className="text-custom-secondary">The Memory Vault offers a secure and private platform to store your most cherished memories. With end-to-end encryption, you can upload photos, videos, and audio clips, knowing they'll be safe for years to come. Perfect for creating a digital time capsule or preserving special moments.</p>
      </section>
      
      <section className="section-custom">
        <h2 className="text-custom-warning">Idea Incubator</h2>
        <p className="text-custom-secondary">Turn your concepts into reality with the Idea Incubator. This tool provides resources, templates, and a collaborative environment for creative minds to develop and refine their ideas. Whether you're designing a new product, writing a book, or planning a project, the Idea Incubator is here to help.</p>
      </section>
      
      <p className="font-weight-bold">At Papadrew's Tools, we're committed to developing solutions that make a difference in your life. Stay tuned for more innovative tools coming your way!</p>
    </div>
  );
}


export default PapadrewToolsPage;
