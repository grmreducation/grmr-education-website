'use client'

import React from 'react'

const FormPage = () => {
    return (
        <section className="w-full py-16 px-4">
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-lg max-w-7xl mx-auto">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-primary mb-2">Feedback Form</h1>
                    <p className="text-muted-foreground text-lg">
                        Please use the weekly or monthly form below for your tutoring feedback. You must fill out the Weekly Feedback Form every tutoring week, regardless if you&apos;ve held a lesson!
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-8 xl:grid-cols-2">
                    <div className="min-w-0">
                        <h2 className="mb-4 text-center text-2xl font-semibold text-primary">Weekly Feedback Form</h2>
                        <iframe
                            src="https://forms.gle/2r5utRbtVkvxVx5X9"
                            width="100%"
                            height="900"
                            className="border-0 w-full rounded-xl"
                            allowFullScreen
                            loading="lazy"
                            title="GRMR Weekly Feedback Form"
                        >
                            Loading...
                        </iframe>
                    </div>
                    <div className="min-w-0">
                        <h2 className="mb-4 text-center text-2xl font-semibold text-primary">Monthly Progress Form</h2>
                        <iframe
                            src="https://forms.gle/b8iAoRqmRUJRMteX8"
                            width="100%"
                            height="900"
                            className="border-0 w-full rounded-xl"
                            allowFullScreen
                            loading="lazy"
                            title="GRMR Monthly Progress Form"
                        >
                            Loading...
                        </iframe>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FormPage
