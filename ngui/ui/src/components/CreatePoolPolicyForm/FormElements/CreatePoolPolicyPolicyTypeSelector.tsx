import { Controller, useFormContext } from "react-hook-form";
import { useIntl } from "react-intl";
import Selector, { Item, ItemContent } from "components/Selector";
import { useConstraints } from "hooks/useConstraints";
import { getDifference } from "utils/arrays";
import { CONSTRAINTS_TYPES } from "utils/constraints";

const CreatePoolPolicyPolicyTypeSelector = ({ name, selectedPool }) => {
  const {
    formState: { errors },
    control
  } = useFormContext();

  const intl = useIntl();
  const constraints = useConstraints();

  return (
    <Controller
      name={name}
      control={control}
      rules={{
        required: {
          value: true,
          message: intl.formatMessage({ id: "thisFieldIsRequired" })
        }
      }}
      render={({ field }) => (
        <Selector
          id="policy-type-selector"
          disabled={!selectedPool.id}
          fullWidth
          labelMessageId="policyType"
          required
          error={!!errors[name]}
          helperText={errors[name] && errors[name].message}
          {...field}
        >
          {selectedPool.id
            ? getDifference(
                constraints,
                selectedPool.policies.map(({ type }) => type)
              ).map((constraintType) => (
                <Item key={constraintType} value={constraintType}>
                  <ItemContent>
                    {intl.formatMessage({
                      id: CONSTRAINTS_TYPES[constraintType]
                    })}
                  </ItemContent>
                </Item>
              ))
            : null}
        </Selector>
      )}
    />
  );
};

export default CreatePoolPolicyPolicyTypeSelector;
