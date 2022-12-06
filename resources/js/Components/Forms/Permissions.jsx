import { trans, transChoice } from "@/narsil-localization";
import { data } from "autoprefixer";
import { upperFirst } from "lodash";
import Toggle from "../Elements/Toggle";

export default function Permissions({ data, setData, permissions }) {
    const formattedPermissions = {};

    const suffixes = [
        'view',
        'create',
        'update',
        'delete',
    ];

    permissions.data.map(({ id, name }) => {
        let model = null;
        let permission = null;

        suffixes.map((suffixe) => {
            if (name.includes(suffixe)) {
                model = name.replace(`_${ suffixe }`, '');
                permission = suffixe;
            }
        })

        if(!formattedPermissions[model])
        {
            formattedPermissions[model] = []
        }

        formattedPermissions[model][permission] = id;
    })

    return (
        <div>
            <div className="grid grid-cols-5">
                <div>
                    { upperFirst(transChoice('common.pages', 2)) }
                </div>
                <div>
                    { upperFirst(trans('common.view')) }
                </div>
                <div>
                    { upperFirst(trans('common.create')) }
                </div>
                <div>
                    { upperFirst(trans('common.update')) }
                </div>
                <div>
                    { upperFirst(trans('common.delete')) }
                </div>
            </div>

            {
                Object.entries(formattedPermissions).map(([key, value]) => {
                    return (
                        <ModelPermissions
                            label={ key }
                            value={ value }
                            data={ data }
                            setData={ setData }
                            key={ key }
                        />
                    );
                })
            }
        </div>
    );
}

const ModelPermissions = ({ label, value, data, setData }) => {
    const suffixes = [
        'view',
        'create',
        'update',
        'delete',
    ];

    return (
        <div className="grid grid-cols-5">
            <div className="truncate">
                { upperFirst(transChoice(`common.${ label }`, 2)) }
            </div>

            {
                suffixes.map((suffixe, index) => {
                    let name = `${ label }_${ suffixe }`

                    return (
                        <div key={ index }>
                            {
                                suffixe in value ? (
                                    <Toggle
                                        value={ data[name] }
                                        onChange={ (event) =>
                                            setData(name, event.target.checked)
                                        }
                                    />
                                ) : null
                            }
                        </div>
                    );
                })
            }
        </div>
    );
}
