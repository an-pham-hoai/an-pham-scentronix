import { useState } from 'react';
import ContentMock, { ContentMockProp } from '../app/content-mock/content-mock';
import { PageContent } from '../app/model/page-content';
import DefaultLayout from '@/app/layouts/default-layout';

const ShopPage = ({ content }: ContentMockProp) => {

    const [pageContent, setPageContent] = useState<PageContent>({ 
        title: 'Discover Our Collection', 
        content: `Explore an exclusive selection of premium products tailored to meet your needs. From the latest fashion trends to timeless essentials, we offer a curated range of high-quality items that cater to every style and preference. Whether you're looking for cutting-edge technology, eco-friendly home goods, or must-have accessories, our collection promises something for everyone. Shop with confidence and enjoy seamless browsing, secure checkout, and fast delivery.`,
        image: 'shop.png',
    });

    return (
        <>
            <DefaultLayout>
                <ContentMock content={pageContent}></ContentMock>
            </DefaultLayout>

        </>
    );
}
export default ShopPage