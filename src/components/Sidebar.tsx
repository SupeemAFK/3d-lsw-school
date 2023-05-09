import { ISidebarContent } from '../interfaces/sidebarContent'

export interface ISidebarProps {
  openSidebar: boolean;
  setOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>;
  sidebarContent: ISidebarContent;
}

export default function Sidebar ({ openSidebar, sidebarContent, setOpenSidebar }: ISidebarProps) {
  return (
    <div className={`bg-white fixed ${openSidebar ? "right-0" : "right-[-100%]"} ${openSidebar ? "visible	" : "invisible"} top-0 h-screen w-full md:w-96 p-4 overflow-y-auto transition-all duration-300`}>
      <div className="flex justify-end">
        <button className='text-xl' onClick={() => setOpenSidebar(false)}>X</button>
      </div>
      <div>
        <img className="w-full object-cover" src={sidebarContent.img} alt="" />
      </div>
      <div>
        <h1 className="text-lg mt-3">{sidebarContent.header}</h1>
        <div className="mt-3">
          <p className="font-normal white">{sidebarContent.preContent}</p>
          <p className="font-light mt-2">{sidebarContent.content}</p>
        </div>
      </div>
    </div>
  );
}
