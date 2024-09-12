import { PageContent } from '../model/page-content';
import './content-mock.css'

export interface ContentMockProp {
    content: PageContent;
}

const ContentMock = ({ content }: ContentMockProp) => {

    return (
        <>
            <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">


                {/* Main Content */}
                <div className="w-full max-w-4xl flex flex-col md:flex-row bg-white shadow-md rounded-lg overflow-hidden">

                    {/* Details Section */}
                    <div className="md:w-1/2 p-6">

                        {/* Header */}
                        <header className="w-full max-w-4xl text-center my-8">
                            <h1 className="text-4xl font-bold text-gray-800">
                                {content.title}
                            </h1>
                            <p className="text-gray-600 mt-4">
                                {content.content}
                            </p>
                        </header>

                    </div>

                    {/* Image Section */}
                    <div className="md:w-1/2">
                        <img
                            src={`/images/${content.image}`}
                            alt="Banana Bread"
                            className="object-cover w-full h-full"
                        />
                    </div>


                </div>
            </div>
        </>
    );
}
export default ContentMock
