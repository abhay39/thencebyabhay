import { ArrowUpRight } from "lucide-react"
import {useState} from 'react'

const questions = [
    {
        id: 1,
        que: "Do you offer freelancers?",
        ans: "If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution."
    },
    {
        id: 2,
        que: "What's the guarantee that I will be satisfied with the hired talent?",
        ans: "If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution."
    },
    {
        id: 3,
        que: "Can I hire multiple talents at once?",
        ans: "If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution."
    },
    {
        id: 4,
        que: "Why should I not go to an agency directly?",
        ans: "If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution."
    },
    {
        id: 5,
        que: "Who can help me pick a right skillset and duration for me?",
        ans: "If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution."
    },


]
const FAQS = () => {
    const [openedQuestionIndex, setOpenedQuestionIndex] = useState(2);

    const handleClick = (index) => {
        setOpenedQuestionIndex(index === openedQuestionIndex ? null : index);
    };

    return (
        <section className=" flex flex-col lg:flex-row gap-10 bg-[#E8EEE7] rounded-lg p-10 mt-10">
            <div className=" md:w-1/2">
                <h1 className=" text-slate-300 styleFontsss">What's on your mind</h1>
                <h1 className=" font-bold text-4xl md:text-5xl lg:text-6xl">Ask Questions</h1>
            </div>
            <div className=" lg:w-1/2">
            {questions.map((item, index) => (
                <div key={index} className=" w-full">
                    <div className="flex justify-between items-center p-3">
                        <h1 className=" md:text-[20px] text-[#1C1C1C] font-semibold">{item.que}</h1>
                        <button onClick={() => handleClick(index)} className="text-xl font-bold hover:bg-green-600 hover:text-white duration-500 ease-linear px-2 rounded-full">+</button>
                    </div>
                    <div className=" p-3 ">
                        {openedQuestionIndex === index && (
                        <p className="text-[15px] text-[#617275]">{item.ans}</p>
                        )}
                    </div>
                    <hr className="border-[#D7D7D7] border-[1px]" />
                </div>
            ))}
        </div>
            
        </section>
    )
}

export default FAQS