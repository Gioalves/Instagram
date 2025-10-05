import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';

export default function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    if (username && password) {
      onLogin();
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.content}>
        {/* Logo Instagram */}
        <Image source={require("../assets/instagram-logo.webp")} style={styles.logo} />

        {/* Formulário de Login */}
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Phone number, email or username"
            placeholderTextColor="#999"
            value={username}
            onChangeText={setUsername}
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#999"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            autoCapitalize="none"
          />
          <TouchableOpacity
            style={[
              styles.loginButton,
              (!username || !password) && styles.loginButtonDisabled,
            ]}
            onPress={handleSubmit}
            disabled={!username || !password}
          >
            <Text style={styles.loginButtonText}>Log in</Text>
          </TouchableOpacity>
        </View>

        {/* Divider */}
        <View style={styles.divider}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerText}>OR</Text>
          <View style={styles.dividerLine} />
        </View>

        {/* Facebook Login */}
        <TouchableOpacity style={styles.facebookButton}>
          <Text style={styles.facebookButtonText}>Log in with Facebook</Text>
        </TouchableOpacity>

        {/* Forgot Password */}
        <TouchableOpacity style={styles.forgotPassword}>
          <Text style={styles.forgotPasswordText}>
            Forgot your login details? Get help signing in.
          </Text>
        </TouchableOpacity>

        {/* Sign Up */}
        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>Don't have an account? </Text>
          <TouchableOpacity>
            <Text style={styles.signupLink}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#FAFAFA',
    justifyContent: 'center',
    paddingVertical: 40,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  logo: {
    width: 200,
    height: 60,
    resizeMode: 'contain',
    marginBottom: 40,
  },
  form: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 44,
    backgroundColor: '#FAFAFA',
    borderWidth: 1,
    borderColor: '#DBDBDB',
    borderRadius: 5,
    paddingHorizontal: 12,
    marginBottom: 10,
    fontSize: 14,
  },
  loginButton: {
    width: '100%',
    height: 44,
    backgroundColor: '#0095F6',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  loginButtonDisabled: {
    backgroundColor: '#B2DFFC',
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginVertical: 20,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#DBDBDB',
  },
  dividerText: {
    marginHorizontal: 18,
    color: '#8E8E8E',
    fontSize: 13,
    fontWeight: '600',
  },
  facebookButton: {
    marginBottom: 20,
  },
  facebookButtonText: {
    color: '#385185',
    fontSize: 14,
    fontWeight: '600',
  },
  forgotPassword: {
    marginBottom: 40,
  },
  forgotPasswordText: {
    color: '#00376B',
    fontSize: 12,
  },
  signupContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  signupText: {
    color: '#262626',
    fontSize: 14,
  },
  signupLink: {
    color: '#0095F6',
    fontSize: 14,
    fontWeight: '600',
  },
});
