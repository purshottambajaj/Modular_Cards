import React from 'react';
import GalleryCard from './components/GalleryCard';
import  { Tabs, Tab } from './components/TabCard';
import AboutCard from './components/AboutCard';

function App() {
  return (
    <div className="flex justify-center items-center h-screen bg-[#25292E]">
      <AboutCard />
      <div>
      <>
      <div className="flex flex-col items-center p-4 bg-[#363C43] m-5 mt-0
       text-white rounded-2xl shadow-lg max-w-4xl max-h-80">
<Tabs>
<Tab label="About me" style={{ boxShadow: '0 0 100px rgba(0, 0, 0, 0.7)' }}>
<div className="py-4">
<h2 className="text-lg font-medium mb-2">About me</h2>
<p className="text-[#7E7F81] font-semibold font-serif">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae
quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis
harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!
Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius ...
</p>
</div>
</Tab>
<Tab label="Experience" >
<div className="py-4">
<h2 className="text-lg font-medium mb-2">Experiences</h2>
<p className="text-[#7E7F81] font-semibold font-serif">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae
quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis
harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!
Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius
...
</p>
</div>
</Tab>
<Tab label="Recommended">
<div className="py-4">
<h2 className="text-lg font-medium mb-2">Recommended</h2>
<p className="text-[#7E7F81] font-semibold font-serif">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae
quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis
harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!
Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius
...
</p>
</div>
</Tab>
</Tabs>
</div>
      </>
      <hr className='max-w-lg ml-14 text-[#383B3F]'></hr>
      <GalleryCard />
      <hr className='max-w-lg ml-14 text-[#383B3F]'></hr>
      </div>
    </div>
  );
}

export default App;
