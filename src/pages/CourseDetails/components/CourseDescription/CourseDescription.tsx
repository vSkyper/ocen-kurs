import { Chip } from '@mui/material';

export default function CourseDescription() {
  return (
    <div className='mb-8'>
      <div className='mb-8'>
        <h2 className='mb-2 text-center text-4xl font-semibold'>
          Podstawy bezpieczeństwa komputerowego
        </h2>
        <h3 className='text-center text-xl hover:underline cursor-pointer'>
          Uniwersytet Warmińsko-Mazurski
        </h3>
      </div>
      <div className='mb-4 p-4 rounded-3xl bg-zinc-800'>
        <p className='indent-8 justify-normal break-normal'>
          To jest opis kursu, który jest opisywany. Opis jest krótki, ale
          jednocześnie dostatecznie długi. Może mieć wiele linijek. Teraz coś
          prostego: wcięcia pierwszej linii każdego akapitu. Wiele osób uważa,
          że wcięcia akapitowe są łatwiejsze do czytania niż odstępy
          międzyakapitowe (stosowane m.in. w języku angielskim, co przyczyniło
          się także do domyślnego podziału tekstu dla HTML-a i tagu P),
          szczególnie w dłuższych tekstach.
        </p>
      </div>
      <div className='mb-4 overflow-clip rounded-3xl bg-zinc-800'>
        <table className='table-fixed rounded-3xl bg-zinc-800 w-full'>
          <tbody className='rounded-3xl bg-zinc-800'>
            <tr>
              <td className='text-lg font-semibold'>Strona kursu:</td>
              <td className=''>
                <a
                  className='underline text-sky-400 visited:text-violet-400'
                  href='https://www.w3schools.com'
                >
                  https://www.w3schools.com
                </a>
              </td>
            </tr>
            <tr>
              <td className='text-lg font-semibold'>Czas trwania:</td>
              <td>nie podano</td>
            </tr>
            <tr>
              <td className='text-lg font-semibold'>Cena:</td>
              <td>darmowy</td>
            </tr>
            <tr>
              <td className='text-lg font-semibold'>Średnia ocen:</td>
              <td>4,8</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='flex flex-auto gap-16 items-start'>
        <Chip className='mb-0' variant='outlined' label='kategoria' />
      </div>
    </div>
  );
}

// {/*   <div>
//         <ul className='flex flex-auto gap-16 items-center'>
//           <li className='text-lg font-semibold'>Strona kursu:</li>
//           <li>
//             <a
//               className='underline text-blue-600 visited:text-purple-600'
//               href='https://www.w3schools.com'
//             >
//               https://www.w3schools.com
//             </a>
//           </li>
//         </ul>
//       </div> */}
//       {/* <div>
//         <ul className='flex flex-auto gap-16 items-center'>
//           <li className='text-lg font-semibold'>Czas trwania:</li>
//           <li>nie podano</li>
//         </ul>
//       </div> */}
//       {/* <div>
//         <ul className='flex flex-auto gap-32 items-center'>
//           <li className='text-lg font-semibold'>Cena:</li>
//           <li>darmowy</li>
//         </ul>
//       </div> */}
