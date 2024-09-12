"use client";

import { AppBar, Box, Button, Card, CardContent, IconButton, MenuItem, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import Image from "next/image";
import Link from 'next/link';
import { useState } from "react";
import "../app/globals.css";
import './index.css'
import NavBar from "../app/nav-bar/nav-bar";
import DefaultLayout from "@/app/layouts/default-layout";

export default function Home() {

  return (
    <div>

      <DefaultLayout>
        <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">


          {/* Main Content */}
          <div className="w-full max-w-4xl flex flex-col md:flex-row bg-white shadow-md rounded-lg overflow-hidden">

            {/* Details Section */}
            <div className="md:w-1/2 p-6">

              {/* Header */}
              <header className="w-full max-w-4xl text-center my-8">
                <h1 className="text-4xl font-bold text-gray-800">Whole-Grain Banana Bread</h1>
                <p className="text-gray-600 mt-4">
                  This one-bowl banana bread — our <a href="#" className="text-blue-600 underline">2018 Recipe of the Year</a> — uses the simplest ingredients, but is incredibly moist and flavorful.
                </p>
              </header>

              <div className="mb-4">
                <h2 className="text-xl font-semibold">Preparation Time</h2>
                <ul className="list-none text-gray-600 mt-2">
                  <li><strong>Prep:</strong> 10 mins</li>
                  <li><strong>Bake:</strong> 1 hr to 1 hr 15 mins</li>
                  <li><strong>Total:</strong> 1 hr 10 mins</li>
                </ul>
              </div>

              <div className="mb-4">
                <h2 className="text-xl font-semibold">Yield</h2>
                <p className="text-gray-600">1 loaf, 12 generous servings</p>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4 mt-6">
                <Button variant="outlined" color="primary">Save Recipe</Button>
                <Button variant="outlined" color="secondary">Print</Button>
              </div>
            </div>

            {/* Image Section */}
            <div className="md:w-1/2">
              <img
                src="/images/bread.png"
                alt="Banana Bread"
                className="object-cover w-full h-full"
              />
            </div>


          </div>
        </div>
      </DefaultLayout>

    </div>

  );
}
