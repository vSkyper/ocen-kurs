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
      <table className='mb-4 table-auto w-full me-32'>
        <tbody>
          <tr>
            <td className='text-lg font-semibold'>Strona kursu:</td>
            <td>
              <a
                className='underline text-blue-600 visited:text-purple-600'
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
        </tbody>
      </table>
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
