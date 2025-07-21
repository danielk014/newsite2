import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET() {
  try {
    const testimonialsDir = path.join(process.cwd(), 'public', 'images', 'testimonials')
    
    // Check if directory exists
    if (!fs.existsSync(testimonialsDir)) {
      return NextResponse.json([])
    }

    // Read all files from the directory
    const files = fs.readdirSync(testimonialsDir)
    
    // Filter for image files only
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.gif']
    const imageFiles = files.filter(file => {
      const ext = path.extname(file).toLowerCase()
      return imageExtensions.includes(ext)
    })
    
    // Sort files naturally (handles numbers in filenames properly)
    imageFiles.sort((a, b) => {
      return a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' })
    })

    return NextResponse.json(imageFiles)
  } catch (error) {
    console.error('Error reading testimonials directory:', error)
    return NextResponse.json([])
  }
}