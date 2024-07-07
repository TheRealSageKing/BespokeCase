Tired of boring, generic iPhone cases? Unleash your inner designer with bespokecase, a dynamic web app built with Next.js that lets you create one-of-a-kind iPhone cases that reflect your unique style!

**Key Features:**

- **Intuitive Customization:** Design your dream case with our user-friendly interface. Upload your photos, artwork, or choose from our extensive library of graphics.
- **Effortless Ordering:** Seamlessly integrate Stripe for secure and swift payments. Your custom case will be delivered straight to your doorstep!
- **Powerful Tech Stack:**
  - **Next.js:** Lightning-fast performance and server-side rendering for an exceptional user experience.
  - **Kinde-Auth:** Streamlined user authentication for a smooth login process.
  - **Stripe:** Secure and trusted payment processing.
  - **Uploadcare.js:** Effortless image and file uploads for a hassle-free customization experience.
  - **Prisma & Postgres:** Robust database management for efficient data storage and retrieval. ️
  - **Shadcn & Framer Motion:** Add a touch of magic with delightful micro-interactions and animations that bring your case design to life! ✨

**Bonus:** Deployed on Vercel for scalability and global reach.

# bespokecase: Craft Your Dream iPhone Case with Bespoke Flair!

bespokecase is a dynamic web application built with cutting-edge technologies that empowers you to design and order personalized iPhone cases that truly represent your unique style.

## Getting Started

1. **Prerequisites:**
   - Node.js and npm (or yarn) installed on your system.
2. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/bespokecase.git
   ```
3. **Install Dependencies:**
   ```bash
   cd bespokecase
   npm install
   ```
4. **Environment Variables:**
   Create a `.env.local` file and configure the following environment variables:
   - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` (Your Stripe Publishable Key)
   - `UPLOADCARE_PUBLIC_KEY` (Your Uploadcare Public Key)
   - `DATABASE_URL` (Your Prisma Database URL)
5. **Database Setup:**
   ```bash
   npx prisma migrate dev
   ```
6. **Start the Development Server:**
   ```bash
   npm run dev
   ```

## Technologies Used:

- **Frontend:** Next.js
- **Authentication:** Kinde-Auth
- **Payments:** Stripe
- **Image/File Uploads:** Uploadcare.js
- **Database:** Prisma & Postgres
- **Micro-interactions & Animations:** Shadcn & Framer Motion
- **Deployment:** Vercel

## Project Structure:

```
bespokecase/
  - components/  # Reusable UI components
  - pages/       # Application pages
  - styles/      # Global and component styles
  - utils/        # Helper functions and utilities
  - public/       # Public assets
  - prisma/       # Prisma schema and configuration
  - .env.local    # Environment variables
  - next.config.js # Next.js configuration
  - package.json   # Project dependencies
  - README.md     # This file
```

## Contributing

We welcome your contributions! Please refer to the CONTRIBUTING.md file for guidelines on how to contribute to the project.

This project is built with the developer experience in mind, offering a fun and creative way to showcase your skills! Feel free to explore the codebase and customize it to your liking.
