import tinycolor from "tinycolor2";
import { useColorStore } from "../Store";

const GradientPreview = () => {
	const gradientColors = useColorStore(state => state.colors);
	const rotateAngle = useColorStore(state => state.rotateAngle);

	const hexColors = gradientColors.map(color => tinycolor(color).toHex8String());
	const gradientString = `linear-gradient(${rotateAngle}deg , ${hexColors.toString()})`;
	return (

		<div className="mb-4">
			<div style={{ backgroundImage: gradientString }} className="max-w-sm aspect-[3/2] border shadow-md rounded-xl border-gray-300 mx-auto">
			</div>
		</div>
	)
}

export default GradientPreview;