const display = (date, format) => {
  const day = date[0];
  const bulan = date[1] - 1;
  const tahun = date[2];
  const bulan1 = [
    'januari',
    'februari',
    'maret',
    'april',
    'mei',
    'juni',
    'juli',
    'agustus',
    'september',
    'oktober',
    'november',
    'desember',
  ];
  const bulan2 = [
    'jan',
    'feb',
    'mar',
    'apr',
    'mei',
    'jun',
    'jul',
    'agust',
    'sept',
    'okt',
    'nov',
    'des',
  ];
  if (format == 'DMMMMY') {
    const month = bulan1[bulan];
    console.log(`${day} ${month} ${tahun}`);
  } else if (format == 'DMMY') {
    const month = bulan2[bulan];
    console.log(`${day} ${month} ${tahun}`);
  }
};

display([31, 12, 1992], 'DMMMMY');
display([21, 1, 1992], 'DMMMMY');
display([10, 5, 1992], 'DMMMMY');
display([31, 12, 1992], 'DMMY');
display([24, 4, 1992], 'DMMY');
display([20, 9, 1992], 'DMMY');
