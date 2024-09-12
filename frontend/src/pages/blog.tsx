import { useState } from 'react';
import ContentMock, { ContentMockProp } from '../app/content-mock/content-mock';
import { PageContent } from '../app/model/page-content';
import DefaultLayout from '@/app/layouts/default-layout';

const BlogPage = ({ content }: ContentMockProp) => {

    const [pageContent, setPageContent] = useState<PageContent>({ 
        title: 'Insights & Innovations', 
        content: 'Stay ahead of the curve with our blog featuring expert insights, the latest trends, and innovative ideas across technology, business, and design. Explore thought-provoking articles that spark creativity and drive progress.',
        image: 'blog.jpg',
    });

    return (
        <>
            <DefaultLayout>
                <ContentMock content={pageContent}></ContentMock>
            </DefaultLayout>

        </>
    );
}
export default BlogPage
