import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { ApplicationState } from '../store';
import * as action from '../store/lang/actions';
import { ILocalization } from 'src/shared/lang/interfaces';

type StateToProps = {
  /** Current preference data. */
  readonly lang: Readonly<ILocalization>;
};

type DispatchToProps = {
  /** Update the entire, or parts of the, preference data object. */
  readonly updateLang: (data: ILocalization) => void;
};

export type WithLangProps = StateToProps & DispatchToProps;

const mapStateToProps = ({ lang }: ApplicationState): StateToProps => ({
  lang: lang.data,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  updateLang: (data: ILocalization) => action.updateLang(data)
}, dispatch);

export const withLang = connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  { getDisplayName: name => 'withLang('+name+')' }
);
