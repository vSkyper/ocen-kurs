export default function CourseDetails() {
  return (
    <div className='m-16'>
      <div className='pb-8'>
        <h2 className='text-center text-4xl pb-2'>
          Podstawy bezpieczeństwa komputerowego
        </h2>
        <h3 className='text-center text-xl hover:underline cursor-pointer'>
          Uniwersytet Warmińsko-Mazurski
        </h3>
      </div>
      <p className='indent-8 justify-normal break-normal'>
        To jest opis kursu, który jest opisywany. Opis jest krótki, ale
        jednocześnie dostatecznie długi. Może mieć wiele linijek. Teraz coś
        prostego: wcięcia pierwszej linii każdego akapitu. Wiele osób uważa, że
        wcięcia akapitowe są łatwiejsze do czytania niż odstępy międzyakapitowe
        (stosowane m.in. w języku angielskim, co przyczyniło się także do
        domyślnego podziału tekstu dla HTML-a i tagu P), szczególnie w dłuższych
        tekstach.
      </p>
      <h4 className='text-lg'>Strona kursu</h4>
      <a
        className='text-blue-600 visited:text-purple-600'
        href='https://www.w3schools.com'
      >
        https://www.w3schools.com
      </a>
    </div>
  );
}
