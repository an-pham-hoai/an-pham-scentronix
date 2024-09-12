import { useState } from 'react';
import ContentMock, { ContentMockProp } from '../app/content-mock/content-mock';
import { PageContent } from '../app/model/page-content';
import DefaultLayout from '@/app/layouts/default-layout';

const LearnPage = ({ content }: ContentMockProp) => {

    const [pageContent, setPageContent] = useState<PageContent>({ 
        title: 'Mastering the Art of Learning', 
        content: `A comprehensive guide that explores the science of learning, offering practical techniques to enhance memory retention, boost comprehension, and accelerate skill acquisition for students and lifelong learners alike.`,
        image: 'learn.png',
    });

    return (
        <>
            <DefaultLayout>
                <ContentMock content={pageContent}></ContentMock>
            </DefaultLayout>

        </>
    );
}
export default LearnPage