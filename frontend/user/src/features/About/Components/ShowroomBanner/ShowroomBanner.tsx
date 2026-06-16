import React from 'react';
import ShowroomImage from '../../../../assets/About/ShowroomImage.png';
function ShowroomBanner(): React.ReactNode {
  return (
    <section className="h-[614px] relative">
      <img className="w-full h-full object-cover" data-alt="A wide-angle, cinematic view" src={ShowroomImage}/>
      <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
        <div className="text-white text-center p-8 backdrop-blur-md bg-white/10 rounded-xl border border-white/20">
          <h2 className="font-headline-xl text-headline-xl mb-4 text-white">نصمم للمستقبل</h2>
          <p className="font-body-lg text-body-lg text-white">حيث تلتقي التكنولوجيا بالفن في كل خطوة.</p>
        </div>
      </div>
    </section>
  );
}

export default ShowroomBanner;
