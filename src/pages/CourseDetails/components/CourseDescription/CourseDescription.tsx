import { Chip } from '@mui/material';

export default function CourseDescription() {
  return (
    <div className='mb-8'>
      <div className='mb-8'>
        <h2 className='mb-2 text-center text-4xl font-semibold'>
          Zaawansowane Techniki Marketingowe
        </h2>
        <h3 className='text-center text-xl hover:underline cursor-pointer'>
          Marketing Masters
        </h3>
      </div>
      <div className='mb-4 p-4 rounded-3xl bg-zinc-800'>
        <p className='indent-8 text-justify break-normal'>
          Kurs dla profesjonalistów z dziedziny marketingu. To jest nieco
          obszerniejszy opis kursu, który jest opisywany. Opis jest krótki, ale
          jednocześnie dostatecznie długi. Może mieć wiele linijek. Kurs dotyczy
          marketingu i tego właśnie można się nauczyć. Zajęcia są prowadzone w
          formule najlepiej dopasowanej do przekazywanych treści. Ukończenie
          kursu jest zakończone egzaminem certyfikującym, który pozwala otrzymać
          certyfikat ukończenia kursu i zaliczenia egzminu. Program kursu został
          starannie przygotowany przez zespół układający program kursu. Opis
          kursu pochodzi ze strony organizatora.
        </p>
      </div>
      <div className='mb-4 overflow-clip rounded-3xl bg-zinc-800'>
        <table className='table-fixed w-full'>
          <tbody className=''>
            <tr>
              <td className='text-lg font-semibold'>Strona kursu:</td>
              <td className=''>
                <a
                  className='underline text-sky-400 visited:text-violet-400'
                  href='https://www.marketingmasters.com/zaawansowane_techniki_marketingowe'
                >
                  www.marketingmasters.com/ztm
                </a>
              </td>
            </tr>
            <tr>
              <td className='text-lg font-semibold'>Czas trwania:</td>
              <td>Nie podano</td>
            </tr>
            <tr>
              <td className='text-lg font-semibold'>Cena:</td>
              <td>499.99 PLN</td>
            </tr>
            <tr>
              <td className='text-lg font-semibold'>Język kursu:</td>
              <td>Angielski</td>
            </tr>
            <tr>
              <td className='text-lg font-semibold'>Średnia ocen:</td>
              <td>4.9</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='flex flex-auto mx-5 gap-4 items-center'>
        <p>Tagi:</p>
        <Chip
          className='mb-0'
          size='medium'
          variant='outlined'
          label='Marketing'
        />
        <Chip
          className='mb-0'
          size='medium'
          variant='outlined'
          label='Średniozaawansowany'
        />
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
