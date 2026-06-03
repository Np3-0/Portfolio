import XButton from "../assets/icons/XButton.tsx"
import ProjectInfo from "../info/projectInfo.ts";

interface ProjectPopupProps {
    handleProjectDisplay: (isOpen: boolean, projectId: number) => void;
    id: number;
}

export default function ProjectPopup({ handleProjectDisplay, id }: ProjectPopupProps) {
    return (
        <>
            <div className="w-full fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
                <div className="rounded-lg bg-white px-8 pt-10 pb-8 shadow-2xl relative w-350 min-h-250">
                    <div className="absolute top-4 right-4 cursor-pointer" onClick={() => handleProjectDisplay(false, id)}>
                        <XButton className="hover:text-blue-500 transition-colors" />
                    </div>
                    <div className="w-full h-full flex flex-col justify-start items-start">
                        <h1 className="text-4xl font-bold mb-4 ml-4">Title</h1>
                        <p className="text-lg ml-4">Description (what does it do and solve?)</p>
                        <p className="text-lg ml-4">Tech Stack</p>
                        <p className="text-lg ml-4">Process & Reflection</p>
                        <p className="text-lg ml-4">Code Snippets</p>
                        <a className="mt-4 px-4 py-2 bg-blue-500 text-white rounded ml-4" target="_blank" rel="noopener noreferrer">
                            View Project
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}