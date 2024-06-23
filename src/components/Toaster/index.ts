import MainToaster from './Toaster';
import Imperative from './ToasterImperative';
import Provider, { useToaster } from './ToasterProvider';

type Contract = typeof MainToaster & {
  Imperative: typeof Imperative;
  Provider: typeof Provider;
  useToaster: typeof useToaster;
};

// @ts-expect-error irfan@fithub.id expected error
const Toaster: Contract = MainToaster;

Toaster.Imperative = Imperative;

Toaster.Provider = Provider;

Toaster.useToaster = useToaster;

export default Toaster;
