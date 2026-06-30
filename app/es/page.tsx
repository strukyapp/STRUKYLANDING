'use client';

import { Suspense } from 'react';
import { HomeContent } from '../page';

export default function SpanishPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-dark-bg" />}>
            <HomeContent initialLang="es" />
        </Suspense>
    );
}
