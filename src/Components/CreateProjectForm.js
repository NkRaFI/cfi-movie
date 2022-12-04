import React, {useState} from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineCheckCircle } from 'react-icons/ai';
import ProjectForm1 from './ProjectForm1';
import ProjectForm2 from './ProjectForm2';
import StProjectForm3 from './ProjectForm3';

const CreateProjectForm = () => {
    const [step, setStep] = useState(1);
    const [formData, steFormData] = useState({
        title: "",
        description: ""
    });
    // const [progress, setProgress] = useState(0)

    /**-----Event Handlers-------- */
    const nextStep =()=>{
        setStep(step+1)
    }
    const prevStep =()=>{
        setStep(step-1)
    }

    return (
        <div>
            {
                step === 1 &&
                <ProjectForm1 formData={formData} />
            }
            {
                step === 2 &&
                <ProjectForm2 formData={formData} />
                
            }
            {
                step === 3 &&
                <StProjectForm3 formData={formData} />
                
            }
            <div className='mt-4 d-flex justify-content-between align-items-center'>


            {
                step > 1 &&
                <div>
                <button className='btn btn-secondary bg-gradient border-0' onClick={prevStep}><AiOutlineArrowLeft className="mb-1" /> Previous </button>
                    </div>
            }
            {
                step <= 2 &&
                <div className='ms-auto'>
                <button className='btn btn-secondary px-5 bg-gradient border-0' onClick={nextStep}>Next <AiOutlineArrowRight className='mb-1' /></button>
                    </div>
            }
            {
                step === 3 &&
                <div>
                <button className='btn btn-success px-4 bg-gradient border-0' type="submit">Submit <AiOutlineCheckCircle className='mb-1' /></button>
                </div>
            }
            </div>
           
        </div>
    );
};

export default CreateProjectForm;