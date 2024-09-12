import { useState } from 'react';
import ContentMock, { ContentMockProp } from '../app/content-mock/content-mock';
import { PageContent } from '../app/model/page-content';
import DefaultLayout from '@/app/layouts/default-layout';

const RecipesPage = ({ content }: ContentMockProp) => {

    const [pageContent, setPageContent] = useState<PageContent>({ 
        title: 'Creamy Garlic Parmesan Chicken Pasta', 
        content: `Heat the olive oil in a large skillet over medium-high heat. Add the seasoned chicken breasts and cook for 5-7 minutes on each side until golden brown and fully cooked (internal temperature of 165°F or 74°C).`,
        image: 'recipes.png',
    });

    return (
        <>
            <DefaultLayout>
                <ContentMock content={pageContent}></ContentMock>
            </DefaultLayout>

        </>
    );
}
export default RecipesPage