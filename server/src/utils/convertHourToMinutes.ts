function convertHourToMinutes(time: string): number {
  const [hous, minutes] = time.split(":").map(Number);
  const timesInMinutes = hous * 60 + minutes;

  return timesInMinutes;
}

export default convertHourToMinutes;
