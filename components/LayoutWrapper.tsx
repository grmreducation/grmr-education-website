'use client'

import FinisherHeader from './FinisherHeader'
import React from 'react'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname()

    return (
        <div className="flex-1 bg-transparent">
            {/* Finisher background on all pages */}
            <FinisherHeader />

            <motion.div
                key={pathname}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
                {children}
            </motion.div>
        </div>
    )
}

export default LayoutWrapper
