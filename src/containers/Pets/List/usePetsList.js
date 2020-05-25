import { useSelector } from 'react-redux';

export default function usePetsList() {
  const pets = useSelector(state => state.petsList.pets);

  return {
    pets,
  }
}