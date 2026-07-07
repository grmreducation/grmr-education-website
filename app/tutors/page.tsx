'use client'

import React, { useState } from 'react'

export default function TutorsPage() {
    const [isLoading, setIsLoading] = useState(true)

    return (
        <main className="flex flex-col items-center gap-8 py-12 px-4">
            <div className="text-center max-w-5xl w-full">
                <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Meet Our Mentors!</h1>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    Explore our amazing mentors who are here to guide and support your learning journey. <b>Click a profile to see more details.</b>
                </p>
            </div>

            <div className="w-full mt-2">
                <div className="relative mx-auto w-[90%] max-w-[1400px] overflow-hidden rounded-2xl border border-gray-300 bg-white/70 shadow-sm">
                    {isLoading && (
                        <div className="absolute inset-0 z-10 flex min-h-[520px] flex-col items-center justify-center gap-4 bg-white/90 px-6 text-center backdrop-blur-sm">
                            <div className="h-10 w-10 animate-spin rounded-full border-4 border-primary/20 border-t-primary" />
                            <div>
                                <h2 className="text-xl font-semibold text-primary">Loading mentor profiles...</h2>
                                <p className="mt-2 max-w-md text-sm text-muted-foreground">
                                    Airtable can take a moment to load the full mentor directory.
                                </p>
                            </div>
                        </div>
                    )}
                    <iframe
                        src="https://airtable.com/embed/app3o2f0OSKx9zDcI/shrJV0QOMXLMgm22k?viewControls=on"
                        frameBorder="0"
                        className="h-[1200px] w-full bg-transparent"
                        title="Tutor Profiles"
                        onLoad={() => setIsLoading(false)}
                    />
                </div>
            </div>
        </main>
    )
}
