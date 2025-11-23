import { useGetProductField } from "@/api/getProductField";
import { Label } from "@/components/ui/label";
import { FilterTypes } from "@/types/filters";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from "react";


type FilterOriginProps = {
    setFilterOrigin: (origin: string) => void
}

const FilterOrigin = (props: FilterOriginProps) => {
    const { setFilterOrigin } = props
    const { result, loading }: FilterTypes = useGetProductField()
    const [selectedOrigin, setSelectedOrigin] = useState<string>('')

    const handleOriginClick = (origin: string) => {
        if (selectedOrigin === origin) {
            // Si ya está seleccionado, deseleccionar
            setSelectedOrigin('')
            setFilterOrigin('')
        } else {
            // Si no está seleccionado, seleccionar
            setSelectedOrigin(origin)
            setFilterOrigin(origin)
        }
    }

    return (
        <div className="my-5">
            <p className="mb-3 font-bold">origen</p>
            {loading && result == null && (
                <p>Cargando origen..</p>
            )}

            <RadioGroup value={selectedOrigin}>
                {result !== null && result.schema.attributes.origin.enum.map((origin: string) => (
                    <div key={origin} className="flex items-center space-x-2">
                        <RadioGroupItem value={origin} id={origin} onClick={() => handleOriginClick(origin)} />
                        <Label htmlFor={origin}>{origin}</Label>
                    </div>
                ))}
            </RadioGroup>
        </div>
    );
}

export default FilterOrigin;