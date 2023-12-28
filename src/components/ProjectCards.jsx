import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { BsPersonBadge, BsPersonWorkspace } from "react-icons/bs";
import { RiTeamFill } from "react-icons/ri";
import Chip from "./shared/Chip";

export default function ProjectCards() {
    const [selectedItem, setSelectedItem] = useState(null)
    const openItem = (item) => {
        setSelectedItem(item)
        eval("my_modal_1.showModal()")
    }
    const closeItem = () => {
        eval("my_modal_1.close()")
        // setTimeout(() => {
        setSelectedItem(null)
        // }, 80);
    }

    const items = [
        {
            id: 1, title: "Biztech HRMS",
            subtitle: "HRMS with focus on automating the recruitment procedure.",
            imageExtraClasses: "h-10 p-0 md:-mt-3",
            renderImage: (extraClasses) => <img
                src={"/images/projects/biztech-logo.png"}
                alt={"Biztech brand logo"}
                className={"p-5 max-h-20 mx-auto " + extraClasses}
            />,
            renderChips: () => <motion.div className="grid grid-flow-dense">
                <Chip
                    icon={<BsPersonBadge size={20} color={"#777"} />}
                    label={"Intern"}
                />
            </motion.div>,
            renderTechStack: () => <div className="row-auto">
                <div className="badge-ghost badge p-3 m-1">Symfony</div>
                <div className="badge-ghost badge p-3 m-1">Doctrine (ORM)</div>
                <div className="badge-ghost badge p-3 m-1">MySQL</div>
                <div className="badge-ghost badge p-3 m-1">HTML5</div>
                <div className="badge-ghost badge p-3 m-1">jQuery</div>
            </div>
            ,
            renderDescription: () => <ul className="list-disc p-2 ml-3">
                <li className="list-item">
                    Software Engineer Intern | July 2018 - March 2019
                </li>
                <li className="list-item">Team of 3</li>
                <li className="list-item">The project was based on HRMS and mainly focused on automating the recruitment
                    procedure.</li>
                <li className="list-item">Among many, my primary responsibilities included report generation with securely
                    saving employee documents and retrieval of the same.</li>
                <li className="list-item">It was my first experience of working on a phase 2 of any project. The project already had a base structure and flow</li>
            </ul>

        },

        {
            id: 3, title: "Project ARG", subtitle: "Automated Rain Gauging sensor data collection and dashboard.",
            imageExtraClasses: "h-10 p-0 md:-mt-3",
            renderImage: (extraClasses) => <img
                src={"/images/projects/agrain/a-grain-logo.png"}
                alt={"Agrain brand logo"}
                className={"p-5 max-h-20 mx-auto " + extraClasses}
            />,
            renderChips: () => <motion.div className="grid grid-flow-dense">
                <Chip
                    icon={<BsPersonWorkspace size={20} color={"#777"} />}
                    label={"Lead Developer"}
                />
            </motion.div>
        },

        {
            id: 5, title: "Devyami IoT App", subtitle: "Internet Of Things App that allows to control and monitor pumps.",
            imageExtraClasses: "h-16 p-0 -mt-6",
            renderImage: (extraClasses) => <img
                src={"/images/projects/DevyamiLogo512.png"}
                alt={"Agrain brand logo"}
                className={"pt-5 max-h-24 mx-auto " + extraClasses}
            />,
            renderChips: () => <motion.div className="grid grid-flow-dense gap-2">
                <Chip
                    icon={<BsPersonWorkspace size={20} color={"#777"} />}
                    label={"App Developer"}
                />
            </motion.div>
        },
        {
            id: 4, title: "StageWise", subtitle: "Wholesome business management software solution for MSMEs.",
            imageExtraClasses: "p-0 -mt-5",
            renderImage: (extraClasses) => <img
                src={"/images/projects/StageWise main.png"}
                alt={"Agrain brand logo"}
                className={"pt-5 max-h-20 mx-auto " + extraClasses}
            />,
            renderChips: () => <motion.div className="grid grid-flow-dense gap-2">
                <Chip
                    icon={<BsPersonWorkspace size={20} color={"#777"} />}
                    label={"Primary Developer"}
                />
                {/* <Chip
                    icon={<GiSupersonicArrow size={20} color={"#777"} />}
                    label={"Co-founder"}
                /> */}
            </motion.div>
        },
        {
            id: 2, title: "Aikyam App",
            subtitle: "Smart Home app with Automations, schedules and more",
            imageExtraClasses: "h-10 p-0 md:-mt-3",
            renderImage: (extraClasses) => <img
                src={"/images/projects/aikyam.png"}
                alt={"Vardhmaan brand logo"}
                className={"p-5 max-h-20 mx-auto " + extraClasses}
            />,
            renderChips: () => <motion.div className="grid grid-flow-dense gap-2">
                <Chip
                    icon={<RiTeamFill size={20} color={"#777"} />}
                    label={"Head of Software & Cloud"}
                />
                {/* <Chip
                    icon={<GiSupersonicArrow size={20} color={"#777"} />}
                    label={"Co-founder"}
                /> */}
            </motion.div>
        },
    ]

    return <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
        {items.map(item => (
            <motion.div
                whileHover={{ scale: 1.1, borderTopWidth: 10, borderColor: "#eeeeee", cursor: 'pointer' }}
                whileFocus={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                key={item.id}
                layoutId={item.id}
                onClick={() => { openItem(item) }}
                className="card-compact rounded-2xl sm:card-normal bg-base-100 shadow-2xl"
            >
                {item.renderImage ? item.renderImage() : <></>}
                <motion.div className="card-body">
                    <motion.h5 className="text-lg font-semibold">{item.title}</motion.h5>
                    <motion.p className="text-sm mb-4">{item.subtitle}</motion.p>
                    {/* <motion.div className="card-actions justify-end">
                        <motion.button className="btn btn-sm mt-4 text-slate-500 capitalize" onClick={() => { openItem(item) }} >View</motion.button>
                    </motion.div> */}

                    {item.renderChips ? item.renderChips() : <></>}

                </motion.div>
            </motion.div>
        ))}

        <AnimatePresence>
            <dialog id="my_modal_1" className="modal" onClose={closeItem}>
                {selectedItem && (
                    <motion.div layoutId={selectedItem.id} className="card-compact rounded-2xl sm:card-normal bg-base-100 shadow-xl mx-5 max-w-xl">
                        <motion.div className="card-body">
                            <motion.span className="card-title">{selectedItem.title}</motion.span>
                            {selectedItem.renderImage ? selectedItem.renderImage() : <></>}


                            {selectedItem.renderTechStack ? selectedItem.renderTechStack() : <></>}

                            <motion.p>{selectedItem.subtitle}</motion.p>

                            {selectedItem.renderDescription ? selectedItem.renderDescription() : <></>}


                            <motion.div className="card-actions justify-end">
                                <motion.button class="btn capitalize btn-sm" onClick={closeItem}>
                                    {/* <motion.svg onClick={closeItem} xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#888"><path onClick={closeItem} stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></motion.svg> */}
                                    Close
                                </motion.button>
                            </motion.div>

                        </motion.div>
                    </motion.div>
                )}
            </dialog>
        </AnimatePresence>




    </div>
}