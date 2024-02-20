import React from "react";
import './ComingSoonPage.css'; // Reintroduce your custom styles for specific color adjustments

function ComingSoonPage() {
    return (
        <div className="coming-soon-page container py-5" >
            <h1 className="text-custom-primary mb-4 text-center">Exciting Features on the Horizon!</h1>
            <p className="lead text-custom-secondary" id="Pdesc">We're always innovating at Papadrew's Tools, and we have some thrilling new features and tools in the works that we can't wait to share with you. Here's a sneak peek at what's coming soon:</p>

            <section className="section-custom mb-5">
                <h2 className="text-custom-info">Virtual Workspace</h2>
                <p className="text-custom-secondary">Immerse yourself in productivity with our Virtual Workspace, an environment designed to enhance focus and creativity. Customize your workspace, collaborate in real-time with colleagues, and access your projects from anywhere in the world.</p>
            </section>

            <section className="section-custom mb-5">
                <h2 className="text-custom-success">AI Assistant</h2>
                <p className="text-custom-secondary">Meet your new personal AI Assistant, designed to help streamline your workflow by managing tasks, scheduling meetings, and even generating ideas. It's like having a personal secretary, but powered by the latest in AI technology.</p>
            </section>

            <section className="section-custom mb-5">
                <h2 className="text-custom-warning">Eco-Friendly Solutions</h2>
                <p className="text-custom-secondary">We're committed to sustainability, and our upcoming eco-friendly solutions will help you measure and reduce your digital carbon footprint. It's our way of ensuring a better future for our planet.</p>
            </section>

            <p className="font-weight-bold text-custom-primary">Stay tuned for more updates and get ready to take your productivity and creativity to new heights with Papadrew's Tools!</p>
        </div>
    );
}

export default ComingSoonPage;
