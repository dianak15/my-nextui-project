
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Features from './components/Features';
import Footer from './components/Footer';
import StarRating from './components/StarRating';
import imageUrl from './assets/images/cover.jpg';

import {Checkbox} from "@nextui-org/react";

import { Button } from '@nextui-org/react';
import { FaArrowRight } from 'react-icons/fa';
import {Navbar, NavbarContent, NavbarItem, Link} from "@nextui-org/react";
import {Divider} from "@nextui-org/react";
import {Card, CardHeader, CardBody } from "@nextui-org/react";



import './index.css'; 




const App: React.FC = () => {

  
  return (
    
    
    <Router>
    <div>
      

      <div className="relative min-h-screen bg-gray-100 flex flex-col items-center justify-center">

      <div className="cover-rectangle"></div>

    <div style={{ position: 'absolute', top:'100px', left: '500px'}}>
      <StarRating rating={5}
      
      
      
      />

      
    </div>

          {/* Blue Rectangle with Circle Curve */}
          <div className="relative top-0 left-0 w-80 h-60 bg-blue-500 rounded-tr-full z-[-1]">
      <div className="blue-rectangle">



      </div>

      
      </div>

      {/* Image Positioned 100px from the Top and 180px from the Left */}
      <img
        src={imageUrl}
        alt="Descriptive Alt Text"
        style={{ position: 'absolute', top: '100px', left: '150px', width: '300px', height: '400px'}}
      />
    

      <Header />
      <div
          className="absolute"
          style={{position:'absolute', top: '955px', left: '300px', right: '340px' }} // 1113px from the top and 300px from the left
        >
          
          <h1 className="text-5xl font-bold mb-4">
              “How to get your first client” is a guide that prepares you to become a freelancer and get your first client.
            </h1>

            <p className="text-2xl font-bold text-gray-500 mb-4">
              Freelancing can be hard, especially when you are starting. It requires skill, dedication, and a thick skin. If you want to become a successful freelancer, you have to be prepared to put in the hard work. You can’t just expect good things to happen if you put no effort into your freelance business. You need to take deliberate, strategic steps to make your business a success.
            </p>

            <p className="text-xl text-gray-500 mb-4">
              I’ve experienced ten years of freelancing. It has been a wild ride exploring different niches, experimenting with content marketing and blogging, and discovering what works best for me. It’s been a rewarding journey that has enabled me to create a career I love. Throughout my freelance journey, I’ve made quite a few mistakes and learned a lot. In this guide, I wanted to share all tips that would have helped me when I was starting. Whether you are new to freelancing or have been doing it for a while, these tips can help you create a more successful career.
            </p>

            <p className="text-xl font-semibold text-gray-800 mb-4">
              In this guide, you will learn how to:
            </p>

            <div className="flex flex-col gap-4">
            <div className="custom-checkbox">
              <Checkbox isDisabled defaultSelected color="primary"  className="custom-checkbox" >
                Be organized to start your freelance business
              </Checkbox>
              </div>
              <Checkbox isDisabled defaultSelected color="primary" className="custom-checkbox">
                Decide on what to offer as a freelancer
              </Checkbox>
              <Checkbox isDisabled defaultSelected color="primary" className="custom-checkbox">
                Polish your skills
              </Checkbox>
              <Checkbox isDisabled defaultSelected color="primary" className="custom-checkbox">
                Create your personal brand
              </Checkbox>
              <Checkbox isDisabled defaultSelected color="primary" className="custom-checkbox">
                Get testimonials and use them to get clients
              </Checkbox>
              <Checkbox isDisabled defaultSelected color="primary" className="custom-checkbox">
                Create your services
              </Checkbox>
              <Checkbox isDisabled defaultSelected color="primary" className="custom-checkbox">
                Price your services
              </Checkbox>
              <Checkbox isDisabled defaultSelected color="primary" className="custom-checkbox">
                Market your services
              </Checkbox>
              <Checkbox isDisabled defaultSelected color="primary" className="custom-checkbox">
                Get your first client
              </Checkbox>
            </div>
            <p className="text-xl font-semibold text-gray-800 mb-4">
            By the end of this guide, you will have a clear idea of how to start your freelance business and get your first client. If you are ready, let’s get started.
            </p>

            <div className="flex flex-col items-center">
        <Button
          color="primary"
          size="lg"
          className="flex items-center gap-2"
        >
          Get free one pre-made tool straight to your inbox
          <FaArrowRight />
        </Button>
      </div>

      <Navbar position="static">
      
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#table-of-contents">
            Table of Contents
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Link color="foreground" href="#problems">
            Problems
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#solutions">
            Solutions
          </Link>
        </NavbarItem>
        
        <NavbarItem>
          <Link color="foreground" href="#pricing">
            Pricing
          </Link>
        </NavbarItem>
        
        <NavbarItem>
          <Link color="foreground" href="#tools">
            Tools
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#author">
            Author
          </Link>
        </NavbarItem>
      </NavbarContent>

    </Navbar>

    <Divider className="my-4" />

    <div id="table-of-contents" className="text-center mt-[95px] px-4">
            <Button disabled color="primary" size="lg">
              Table of Contents
            </Button>
            <p className="text-5xl font-bold text-gray-800 mt-[35px]">
              Get a look at all of the content covered in the guide. Everything you need to know is inside.
            </p>
            <p className="text-xl text-gray-500 mt-4 mb-8">
                  “Get Your First Client” is designed to be a complete guide for the ones who want to start freelancing. It’s a step-by-step guide that will help you to get started with freelancing. What you need to do, how to do it, and finally, how to get clients.
                </p>
                <p className="text-4xl font-bold text-gray-800 mb-8">
                  Getting started
                </p>

                <div className="flex flex-col items-start ml-10 mb-8">
                  <div className="flex flex-col gap-4">
                    <p className="text-xl text-gray-800">
                      Getting started
                    </p>
                    <Divider />
                    <p className="text-xl text-gray-800">
                      First Step and Decision
                    </p>
                    <Divider />
                    <p className="text-xl text-gray-800">
                      How is The Process
                    </p>
                  </div>
                </div>

                <p className="text-4xl font-bold text-gray-800 mb-8">
                  Sources
                </p>

                <div className="flex flex-col items-start ml-10">
                  <div className="flex flex-col gap-4">
                    <p className="text-xl text-gray-800">
                      Equipments
                    </p>
                    <Divider />
                    <p className="text-xl text-gray-800">
                      Skills
                    </p>
                    <Divider />
                    <p className="text-xl text-gray-800">
                      Tools
                    </p>
                  </div>
                </div>

                <div id="problems" className="text-center mt-[95px] px-4">
                <Button disabled color="primary" size="lg">
              Problems
            </Button>
            <p className="text-5xl font-bold text-gray-800 mt-[35px]">
            Freelancing is not a walk in the park. It’s hard to get started and even harder to get clients.
            </p>
            <p className="text-xl text-gray-500 mt-4 mb-8">
            Most freelancers struggle at the beginning. They don’t know how to get started, how to get clients, and how to make money. Most people think that successful freelancers get that with luck. But it’s not. It’s about working with the system and the correct process. And that’s what I want to help you with.
                </p>

                <p style={{ position: 'absolute', top: '1420px', left: '-160px' }} className="text-xl font-semibold text-gray-800">
                    That’s ok if you feel;
                  </p>
                  <div className="flex flex-col gap-8 mt-[85px] ml-[20px]">
                    <div className="flex justify-between gap-4">
                      <p className="text-gray-800 flex-1 text-center">Text 1</p>
                      <p className="text-gray-800 flex-1 text-center">Text 2</p>
                      <p className="text-gray-800 flex-1 text-center">Text 3</p>
                      <p className="text-gray-800 flex-1 text-center">Text 4</p>
                    </div>
                    <div className="flex justify-between gap-4">
                      <p className="text-gray-800 flex-1 text-center">Text 5</p>
                      <p className="text-gray-800 flex-1 text-center">Text 6</p>
                      <p className="text-gray-800 flex-1 text-center">Text 7</p>
                      <p className="text-gray-800 flex-1 text-center">Text 8</p>
                    </div>
                  </div>

          
                </div>

                <div id="pricing" className="text-center mt-[95px] px-4">
                <Button disabled color="primary" size="lg">
              Pricing
            </Button>
            <p className="text-5xl font-bold text-gray-800 mt-[35px]">
            Pick your package
            </p>
            <p className="text-xl text-gray-500 mt-4 mb-8">
            “Get Your First Client” is available in two different packages so you can pick the one that’s right for you.
                </p>

                <div className="mt-[125px] flex justify-center gap-8">


                  <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3">
        
        <div className="flex flex-col">
        <p style={{ fontSize: '2rem', color: 'black' }}>$ 39</p>
          
        </div>
      </CardHeader>
      
      <CardBody>
        <p className="text-small text-default-500">Just The Guide</p>
        <p>The perfect starting point if you’re on a budget.</p>
        <Button color="primary" size="lg">Get started</Button>

        <Checkbox isDisabled defaultSelected color="primary" className="custom-checkbox">
                The complete guide
              </Checkbox>

              <Checkbox isDisabled defaultSelected color="primary" className="custom-checkbox">
                Ongoing updates
              </Checkbox>

      </CardBody>
      
      
    </Card>
    <Card style={{ maxWidth: '400px', backgroundColor: '#006FEE' }}>
      <CardHeader className="flex gap-3">
        
        <div className="flex flex-col">
        <p style={{ fontSize: '2rem', color: 'white' }}>$49.99</p>
          
        </div>
      </CardHeader>
      
      <CardBody>
        <p className="text-small text-white" >The Guide + Tools + Templates</p>
        <p className="text-white">The guide, the pre-made tools and the templates to operate.</p>
        <Button color="primary" size="lg">Get started</Button>

        <Checkbox isDisabled defaultSelected color="primary" className="custom-checkbox">
                The complete guide
              </Checkbox>

              <Checkbox isDisabled defaultSelected color="primary" className="custom-checkbox">
              Proposal, Contract, Invoice Template
              </Checkbox>
              <Checkbox isDisabled defaultSelected color="primary" className="custom-checkbox">
              Project Management Tool
              </Checkbox>
              <Checkbox isDisabled defaultSelected color="primary" className="custom-checkbox">
              Customer Management Tool
              </Checkbox>
              <Checkbox isDisabled defaultSelected color="primary" className="custom-checkbox">
              Ongoing updates
              </Checkbox>

      </CardBody>
      
      
    </Card>
                </div>

                </div>


          </div>
          
      <Routes>
      <Route path="/buy-guide" element={<Features />} />
     
      </Routes>





      <Footer />
    
    </div>
    </div>
    </div>
    </Router>
  );
};

export default App;

