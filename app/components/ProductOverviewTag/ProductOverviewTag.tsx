import { CarbonIconType } from '@carbon/icons-react';

type Props = {
  Icon: CarbonIconType;
  name: string;
  value: string;
};

export default function ProductOverviewTag({ Icon, name, value }: Props) {
  return (
    <div className='flex flex-row items-center'>
      <Icon size={32} />
      <div className='flex flex-col ml-4'>
        <div className='font-semibold pb-1'>{name}</div>
        <div>{value}</div>
      </div>
    </div>
  );
}
