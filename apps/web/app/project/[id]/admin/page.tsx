import { Suspense } from 'react';
import { MobileMenu, MobileMenuSkeleton } from 'auth/components/mobile-menu';
import { AdminHead } from './admin-head';
import { ArticlesView } from 'admin/articles-view';
import { Support } from 'communication/components/support';

export default function Admin({ params: { id } }: { params: { id: string } }) {
    return (
        <div className="md:overflow-hidden flex flex-col gap-3 h-full">
            <Suspense fallback={<MobileMenuSkeleton />}>
                <MobileMenu />
            </Suspense>
            <AdminHead></AdminHead>
            <div className="flex gap-8 md:gap-5 flex-col px-5 md:px-0 md:flex-row">
                <ArticlesView projectId={id}></ArticlesView>
                <div className="w-full md:w-[326px]">
                    <Support background={true} />
                </div>
            </div>
        </div>
    );
}
