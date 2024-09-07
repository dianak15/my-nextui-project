import React from "react";
import { Button } from "@nextui-org/react"; // Ensure Button is correctly imported


const Header: React.FC = () => {
  return (
    <header className="bg-primary text-white py-6">
      <div style={{ position: 'absolute', top:'274px', left: '500px'}}>

        <h1 className="text-4xl font-extrabold">Get Your First Client</h1>
        <h2 className = "text-1xl font-light">A complete step by step guide to get your first client as a freelancer from scratch.</h2>

        <div className="flex justify-center gap-1 mb-8">
          <a href="#pricing">
            <Button radius="full"  color="primary" variant="shadow">
              Get Free Tools
            </Button>
          </a>
          <a href="/buy-guide">
            <Button radius="full" color="secondary" variant = "light">
              Buy the Guide
            </Button>
          </a>
        </div>
        



      </div>
    </header>
  );
};

export default Header;

