# Infinite Canvas

Your Private AI Creative Assistant - A powerful tool for generating and managing creative assets with AI.

![Screenshot 2024-12-18 at 10 16 48 PM](https://github.com/user-attachments/assets/9e1e8c8f-c070-4d8d-9aa5-069d3de07c25)

## Features

- 🎨 **AI-Powered Design Generation**: Create variations of your designs using advanced AI models
- 🔄 **Real-time Preview**: See changes and variations instantly
- 📱 **Responsive Interface**: Works seamlessly across all device sizes
- 🎯 **Style Controls**: Fine-tune your creative output with precise controls
- 🔒 **Privacy-First**: All processing happens locally on your device
- ⚡ **High Performance**: Optimized for speed and efficiency

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **State Management**: React Hooks
- **Type Safety**: TypeScript

## Project Structure

```
infinite-canvas/
├── app/                    # Next.js app directory
│   ├── playground/        # Main playground page
│   └── insights/         # Training insights page
├── components/            # React components
│   ├── canvas/           # Canvas-related components
│   ├── controls/         # Control panel components
│   ├── demo/             # Demo and onboarding components
│   ├── feedback/         # Feedback and metrics components
│   ├── hardware/         # Hardware status components
│   ├── layout/           # Layout components
│   ├── ui/              # Base UI components
│   └── workspace/        # Workspace components
├── lib/                  # Utilities and hooks
│   ├── constants/       # Constants and configuration
│   ├── hooks/           # Custom React hooks
│   └── types/           # TypeScript types
└── public/              # Static assets
```

## Getting Started

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/infinite-canvas.git
cd infinite-canvas
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the development server**
```bash
npm run dev
```

4. **Open the application**
Open [http://localhost:3000](http://localhost:3000) in your browser

## Development

- **Code Style**: The project uses ESLint and Prettier for code formatting
- **Type Safety**: TypeScript is used throughout the project
- **Components**: Follow the component structure in the components directory
- **State Management**: Use React hooks for state management
- **Styling**: Use Tailwind CSS classes for styling

## Key Components

- **DropZone**: Main canvas area for uploading and viewing assets
- **ControlPanel**: Side panel for adjusting style and output settings
- **WorkspaceHeader**: Top navigation and project controls
- **OnboardingOverlay**: Interactive tutorial for new users
- **LoadingState**: Loading indicators and processing states
- **ErrorBoundary**: Error handling and recovery

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details
