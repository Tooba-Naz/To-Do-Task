import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../Components/Button/Index";
import { BiMessageRoundedDetail } from 'react-icons/bi';
import { LuClock4, LuClock8 } from 'react-icons/lu';
import { GrTextAlignFull } from 'react-icons/gr';
import SideBar from "../../Components/SideBar/Index";
import { Input } from "@material-ui/core";


const Todotask = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <><section className="section1 float-left w-screen h-screen grid grid-cols-3">
     <SideBar/><div></div>
      <div>
        <h1 className="mt-11 font-bold text-lg text-slate-600 " onClick={() => setIsModalOpen(true)}>+Add new task</h1>
        <div>
          <h2 className="mt-5 font-bold text-lg text-slate-600">Incomplete</h2>
          <div className="flex items-center mb-4">
            <Input id="default-checkbox" type="checkbox" value="" varient="TaskPage" ></Input>
            <label htmlFor="default-checkbox" className="ml-3 text-lg font-semibold text-slate-600" onClick={()=> setShowModal(true)}>Submit my resume</label>
          </div>
          <p className="-mt-4 ml-7 text-sm font-semibold text-slate-400">⏰ Today, 17.00</p>
        </div>
        <div className="flex items-center mb-4 mt-3">
          <Input id="default-checkbox" type="checkbox" value="" varient="TaskPage"></Input>
          <label htmlFor="default-checkbox" className="ml-3 text-lg font-semibold text-slate-600">Complete the test</label>
        </div>
        <p className="-mt-4 ml-7 text-sm font-semibold text-slate-400">⏰ Tomorrow, 10.00</p>
        <div className="flex items-center mb-4 mt-3">
          <Input id="default-checkbox" type="checkbox" value="" varient="TaskPage"></Input>
          <label htmlFor="default-checkbox" className="ml-3 text-lg font-semibold text-slate-600">Meeting with Jack</label>
        </div>
        <p className="-mt-4 ml-7 text-sm font-semibold text-slate-400">⏰ 24 Feb, 15.00</p>
        <div className="flex items-center mb-4 mt-3">
          <Input id="default-checkbox" type="checkbox" value="" varient="TaskPage"></Input>
          <label htmlFor="default-checkbox" className="ml-3 text-lg font-semibold text-slate-600">Buy a chocolate htmlFor Mom</label>
        </div>
        <p className="-mt-4 ml-7 text-sm font-semibold text-slate-400">⏰ 24 Feb, 11.00</p>
        <div className="flex items-center mb-4 mt-3">
          <Input id="default-checkbox" type="checkbox" value="" varient="TaskPage"></Input>
          <label htmlFor="default-checkbox" className="ml-3 text-lg font-semibold text-slate-600">Facetime with Dad</label>
        </div>
        <p className="-mt-4 ml-7 text-sm font-semibold text-slate-400">⏰ 24 Feb, 18.00</p>

        <h2 className="mt-9 font-bold text-lg text-slate-600">Complete</h2>
        <div>
          <div className="flex items-center mb-4 mt-3">
            <Input checked id="checked-checkbox" type="checkbox" value="" varient="TaskPage"></Input>
            <label htmlFor="checked-checkbox" className="ml-3 text-lg font-semibold text-slate-400">Respond to Jane email</label>
          </div>
          <div className="flex items-center mb-4 mt-3">
            <Input checked id="checked-checkbox" type="checkbox" value="" varient="TaskPage"></Input>
            <label htmlFor="checked-checkbox" className="ml-3 text-lg font-semibold text-slate-400">Rechedule weekly meeting</label>
          </div>
          <div className="flex items-center mb-4 mt-3">
            <Input checked id="checked-checkbox" type="checkbox" value="" varient="TaskPage"></Input>
            <label htmlFor="checked-checkbox" className="ml-3 text-lg font-semibold text-slate-400">Service my bike</label>
          </div>
          <div className="flex items-center mb-4 mt-3">
            <Input checked id="checked-checkbox" type="checkbox" value="" varient="TaskPage"></Input>
            <label htmlFor="checked-checkbox" className="ml-3 text-lg font-semibold text-slate-400">Recheck the agreement document</label>
          </div>
          <div className="flex items-center mb-4 mt-3">
            <Input checked id="checked-checkbox" type="checkbox" value="" varient="TaskPage"></Input>
            <label htmlFor="checked-checkbox" className="ml-3 text-lg font-semibold text-slate-400">Check the latest on Community</label>
          </div>
        </div>
      </div>
    </section>
      <NewTask setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} />
      <Reminder setShowModal={setShowModal} showModal={showModal}/>
    </>
  )
}

export default Todotask;
const NewTask = ({ isModalOpen, setIsModalOpen }) => {
  return (
    <>
      <div id="authentication-modal" tabindex="-1"
        className={`fixed pt-0 pb-0 pl-0 pr-0 w-full h-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 max-h-full ${isModalOpen ? '' : 'hidden'}`}>
        <div className="flex items-center justify-center h-screen bg-black bg-cover md:bg-opacity-50">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-100" style={{ width: '756px', height: '501px' }}>
            <div className="px-6 py-6 lg:px-8">
              <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                New Task
              </h3>
              <htmlForm className="space-y-6">
                <div className="flex justify-center items-center">
                  <BiMessageRoundedDetail size={'20'} color="gray" className="absolute left-24" />
                  <Input type="text"
                    className="py-5 w-9/12 "
                    varient="Modal"
                    placeholder="Summary" />
                </div>
                <div className="flex justify-center items-center">
                  <GrTextAlignFull size={'20'} color="gray" className="absolute mb-14 left-24" />
                  <Input type="text"
                    className="pb-14 w-9/12 "
                    varient="Modal"
                    placeholder="Description" />
                </div>
                <div className="flex justify-center items-center">
                  <LuClock8 size={'20'} color="gray" className=" absolute mb-5 left-24" />
                  <Input type="text"
                    className="pb-5 w-9/12 "
                    varient="Modal"
                    placeholder="Due Date" />
                </div>
                <div className="flex flex-col items-center justify-between">
                  <Button
                    type="submit"
                    size="large"
                    className="rounded-full"
                    varient='formButton'
                  >
                    Save
                  </Button>
                </div>
                <div className="flex flex-col items-center justify-between">
                  <Button onClick={() => setIsModalOpen(false)}
                    type="submit"
                    size="large"
                    className="rounded-full font-bold "
                    varient="secondformButton"
                  >
                    Cancel
                  </Button>
                </div>
              </htmlForm>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

const Reminder = ({showModal, setShowModal}) => {
  return (
    <>
    <div id="authentication-modal" tabindex="-1"
      className={`fixed pt-0 pb-0 pl-0 pr-0 w-full h-full p-2 overflow-x-hidden overflow-y-auto md:inset-0 max-h-full flow-right ${showModal ? '' : 'hidden'}`}>
      <div className="float-right mt-9 mr-9 h-screen bg-gray-200 bg-cover rounded-lg" style={{ width: '360px', height: '130px' }} >
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-100 flow-root" style={{ width: '360px', height: '100px' }}>
          <div className="float-right bg-yellow-500 mt-6 mr-6 rounded-xl" style={{ height: '50px', width: '50px' }}>
            <LuClock4 className="absolute top-9 right-9" size={'25px'} />
          </div>
          <div className="px-3 py-3 lg:px-6">
            <h3 className="mb-4 text-l font-bold text-gray-900">
              Submit my resume
            </h3>
            <h3 className="absolute top-10 text-l text-gray-500">
              Send my resume to DigitalTolk
            </h3>
          </div>
        </div>
        <div className="absolute right-12">
          <button type="submit" className="mr-7" onClick={() => setShowModal(false)}>skip</button>
          <button type="submit" onClick={() => setShowModal(false)}>Remind me later</button>
        </div>
      </div>
    </div>
    </>
  );
}