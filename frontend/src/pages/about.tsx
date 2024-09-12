import { useState } from 'react';
import ContentMock, { ContentMockProp } from '../app/content-mock/content-mock';
import { PageContent } from '../app/model/page-content';
import DefaultLayout from '@/app/layouts/default-layout';

const AboutPage = ({ content }: ContentMockProp) => {

    const [pageContent, setPageContent] = useState<PageContent>({ 
        title: 'About Us', 
        content: 'We are a passionate team of innovators dedicated to creating impactful solutions that drive progress. Our mission is to empower individuals and businesses through creativity, collaboration, and cutting-edge technology.',
        image: 'about.png',
    });

    return (
        <>
            <DefaultLayout>
                <ContentMock content={pageContent}></ContentMock>
            </DefaultLayout>

        </>
    );
}
export default AboutPage